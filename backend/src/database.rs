//! A module to

use chrono::{DateTime, Utc};
use futures::TryStreamExt;
use mongodb::{
    bson::{doc, Document},
    error::Error,
    options::FindOptions,
    Client, Cursor, Database,
};

use crate::utils::{get_docs_from_cursor, merge_cursors};

#[derive(Clone, Debug)]
pub struct DB {
    db: Database,
}

impl DB {
    /// Inits the connection with the database
    pub async fn init(uri: &str) -> Self {
        let db = Client::with_uri_str(uri).await.unwrap().database("Projet");
        DB { db }
    }

    /// Finds documents of a collection in our database
    async fn find(
        &self,
        name: &str,
        filter: Document,
        option: Option<FindOptions>,
    ) -> Result<Cursor<Document>, Error> {
        self.db
            .collection::<Document>(name)
            .find(filter, option)
            .await
    }

    /// Aggregates documents of a collection in our database
    async fn aggregate(
        &self,
        name: &str,
        aggregate: impl IntoIterator<Item = Document>,
    ) -> Result<Cursor<Document>, Error> {
        self.db
            .collection::<Document>(name)
            .aggregate(aggregate, None)
            .await
    }

    /// Properties that can accommodate a number of people and are available between two dates
    pub async fn get_disponibility(
        &self,
        nb: i32,
        start_date: DateTime<Utc>,
        end_date: DateTime<Utc>,
        limit: usize,
    ) -> Result<Vec<Document>, Error> {
        let aggregate = [
            doc! { "$match": {"date": {"$gte": start_date, "$lte": end_date}}},
            doc! {"$group": {"_id": "$listing_id", "date": {"$push": {"calendar": "$date"}}}},
            doc! {"$match": {"date": {"$size": 4} }},
        ];

        let mut listing = self
            .find("listing", doc! { "accommodates": {"$gte": nb} }, None)
            .await?;
        let mut calendar = self.aggregate("calendar", aggregate).await?;

        merge_cursors(&mut listing, "id", &mut calendar, "_id", limit).await
    }

    /// Most recent comment for all available properties on a date
    pub async fn request_2(&self, date: DateTime<Utc>) -> Result<Vec<Document>, Error> {
        let result = Vec::new();

        let aggregate = [
            doc! {"$group": {"_id": "$listing_id", "date": {"$max": "$date"}, "doc": {"$first": "$$ROOT"}}},
            doc! {"$replaceRoot": {"newRoot": "$doc"}},
        ];

        let mut cal_cursor = self.find("calendar", doc! { "date": date }, None).await?;
        let mut details = self.aggregate("review_detailed", aggregate).await?;

        let calendar: Vec<Document> = cal_cursor.try_collect().await?;

        while let Some(c) = details.try_next().await? {
            // if
            // println!("{}", c);
        }

        Ok(result)
    }

    pub async fn request_3(
        &self,
        start: DateTime<Utc>,
        end: DateTime<Utc>,
    ) -> Result<Vec<Document>, Error> {
        let aggregate1 = [
            doc! {"$group": {"_id": "$neighborhood", "price_list": {"$push": {"listing_id": "$id", "price": "$price"}}}},
            doc! {"$unwind": "$price_list"},
            doc! {"$sort": {"price_list.price": 1}},
            doc! {"$group": {"_id": "$_id", "pricing_list": {"$push": {"listing_id": "$price_list.listing_id", "price": "$price_list.price"}}}},
            doc! {"$project": {"price_list.price": {"$slice": ["$pricing_list", 5]}}},
        ];

        let aggregate2 = [
            doc! {"$match": {"date": {"$gte": start, "$lte": end}}},
            doc! {"$group": {"_id": "$listing_id", "date": {"$push": {"calendar": "$date"}}}},
            doc! {"$match": {"date": {"$size": 4}}},
        ];

        let mut listing = self.aggregate("listing", aggregate1).await?;
        let mut calendar = self.aggregate("calendar", aggregate2).await?;

        println!("{:?}", listing.try_next().await);
        println!("{:?}", calendar.try_next().await);

        //merge_cursors(listing, "", cursor2, key2, nb)

        //TODO truc

        Ok(Vec::new())
    }

    /// Availability to go with your couple of friends
    pub async fn get_availability(
        &self,
        nb_bedrooms: i32,
        nb_beds: i32,
        limit: usize,
    ) -> Result<Vec<Document>, Error> {
        let option = FindOptions::builder().sort(doc! {"price": 1}).build();
        let mut docs = self
            .find(
                "listing",
                doc! {"bedrooms": {"$gte": nb_bedrooms}, "accommodates": {"$gte" : nb_bedrooms + nb_beds}, "beds": {"$gte": nb_beds}},
                Some(option),
            )
            .await?;

        get_docs_from_cursor(&mut docs, limit).await
    }

    /// Number of rentals that do not have an adjusted price corresponding to the list price
    pub async fn get_adjusted_prices(&self, limit: usize) -> Result<Vec<Document>, Error> {
        let mut docs = self
            .find(
                "calendar",
                doc! { "$expr": {"$ne": ["$price", "$adjusted_price"]}},
                None,
            )
            .await?;

        get_docs_from_cursor(&mut docs, limit).await
    }

    /// Distribution of average prices according to the number of rooms by type of property
    pub async fn get_average_prices(&self, limit: usize) -> Result<Vec<Document>, Error> {
        let aggregate = [
            doc! {"$group": {"_id": {"property_type": "$property_type", "bedrooms": "$bedrooms"}, "mean_price": {"$avg": "$price"}}},
            doc! {"$sort": {"_id.property_type": 1, "_id.bedrooms": 1}},
        ];

        let mut docs = self.aggregate("listing", aggregate).await?;

        get_docs_from_cursor(&mut docs, limit).await
    }

    /// Evolution of the number of reviews as a function of time
    pub async fn get_reviews_evolution(&self, limit: usize) -> Result<Vec<Document>, Error> {
        let aggregate = [
            doc! {"$addFields": {"review_month": {"$month": "$date"}, "review_year": {"$year": "$date"}}},
            doc! {"$group": {"_id": {"month_of_review": "$review_month", "year_of_review": "$review_year"}, "number_of_review": {"$sum": 1}}},
        ];

        let mut docs = self.aggregate("review_detailed", aggregate).await?;

        get_docs_from_cursor(&mut docs, limit).await
    }

    /// Average property scores in each category by neighborhood
    pub async fn get_average_scores(&self, limit: usize) -> Result<Vec<Document>, Error> {
        let aggregate = [
            doc! {"$match": {"number_of_reviews": {"$gt": 0}}},
            doc! {"$project": {"listing_id": 1, "review_scores_rating": 1, "review_scores_accuracy":1,"review_scores_cleanliness": 1, "review_scores_checkin":1, "review_scores_communication": 1, "review_scores_location":1, "review_scores_value":1}},
            doc! {"$lookup": {"from": "listing", "localField": "listing_id", "foreignField": "id", "as": "listing_details"}},
            doc! {"$addFields": {"neighborhood": "$listing_details_neighborhood"}},
            doc! {"$unwind": "$neighborhood"},
            doc! {"$group": {
                "_id": "$neighborhood",
                "average_rating_score": {"$avg": "$review_scores_rating"},
                "average_accuracy_score": {"$avg": "$review_scores_accuracy"},
                "average_cleanliness_score": {"$avg": "$review_scores_cleanliness"},
                "average_checkin_score": {"$avg": "$review_scores_checkin"},
                "average_communication_score": {"$avg": "$review_scores_communication"},
                "average_location_score": {"$avg": "$review_scores_location"},
                "average_score_value": {"$avg": "$review_scores_value"}
            }},
        ];

        let mut docs = self.aggregate("listing_reviews", aggregate).await?;

        get_docs_from_cursor(&mut docs, limit).await
    }
}
