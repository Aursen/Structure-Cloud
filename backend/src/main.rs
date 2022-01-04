mod database;
mod utils;

use actix_files::Files;
use actix_web::{
    get,
    middleware::Logger,
    web::{self, Data},
    App, HttpResponse, HttpServer, Result,
};
use chrono::{DateTime, Utc};
use database::DB;
use serde::Deserialize;
use std::env;

const LIMIT: usize = 5;

#[derive(Deserialize)]
struct QueryDisponibility {
    nb: i32,
    start: DateTime<Utc>,
    end: DateTime<Utc>,
}

#[derive(Deserialize)]
struct QueryAvailability {
    nb_bedrooms: i32,
    nb_beds: i32,
}

#[get("/disponibility")]
async fn disponibility(db: Data<DB>, data: web::Query<QueryDisponibility>) -> Result<HttpResponse> {
    match db
        .get_disponibility(data.nb, data.start, data.end, LIMIT)
        .await
    {
        Ok(r) => Ok(HttpResponse::Ok().json(r)),
        _ => Ok(HttpResponse::BadRequest().finish()),
    }
}

#[get("/availability")]
async fn availability(db: Data<DB>, data: web::Query<QueryAvailability>) -> Result<HttpResponse> {
    match db
        .get_availability(data.nb_bedrooms, data.nb_beds, LIMIT)
        .await
    {
        Ok(r) => Ok(HttpResponse::Ok().json(r)),
        _ => Ok(HttpResponse::BadRequest().finish()),
    }
}

#[get("/adjusted_prices")]
async fn adjusted_prices(db: Data<DB>) -> Result<HttpResponse> {
    match db.get_adjusted_prices(LIMIT).await {
        Ok(r) => Ok(HttpResponse::Ok().json(r)),
        _ => Ok(HttpResponse::BadRequest().finish()),
    }
}

#[get("/average_prices")]
async fn average_prices(db: Data<DB>) -> Result<HttpResponse> {
    match db.get_average_prices(LIMIT).await {
        Ok(r) => Ok(HttpResponse::Ok().json(r)),
        _ => Ok(HttpResponse::BadRequest().finish()),
    }
}

#[get("/reviews_evolution")]
async fn reviews_evolution(db: Data<DB>) -> Result<HttpResponse> {
    match db.get_reviews_evolution(LIMIT).await {
        Ok(r) => Ok(HttpResponse::Ok().json(r)),
        _ => Ok(HttpResponse::BadRequest().finish()),
    }
}

#[get("/average_scores")]
async fn average_scores(db: Data<DB>) -> Result<HttpResponse> {
    match db.get_average_scores(LIMIT).await {
        Ok(r) => Ok(HttpResponse::Ok().json(r)),
        _ => Ok(HttpResponse::BadRequest().finish()),
    }
}

#[actix_web::main]
async fn main() -> Result<(), std::io::Error> {
    dotenv::dotenv().ok();

    let port = env::var("PORT").unwrap_or_else(|_| "8080".to_string());
    let db_uri = env::var("MONGO_URI").expect("invalid uri of mongo!");
    let db = DB::init(&db_uri).await;

    HttpServer::new(move || {
        App::new()
            .app_data(Data::new(db.to_owned()))
            .wrap(Logger::default())
            .service(disponibility)
            .service(availability)
            .service(adjusted_prices)
            .service(average_prices)
            .service(reviews_evolution)
            .service(average_scores)
            .service(Files::new("/", env::var("FRONT_PATH").unwrap()).index_file("index.html"))
            .default_service(web::route().to(HttpResponse::NotFound))
    })
    .bind(format!("0.0.0.0:{}", port))?
    .run()
    .await
}
