use futures::TryStreamExt;
use mongodb::{bson::Document, error::Error, Cursor};

/// Gets documents from a document's cursor with a limit
pub async fn get_docs_from_cursor(
    cursor: &mut Cursor<Document>,
    nb: usize,
) -> Result<Vec<Document>, Error> {
    let mut result: Vec<Document> = Vec::with_capacity(nb);

    while let Some(c) = cursor.try_next().await? {
        if result.len() >= result.capacity() {
            break;
        }
        result.push(c);
    }

    Ok(result)
}

pub async fn merge_cursors(
    cursor1: &mut Cursor<Document>,
    key1: &str,
    cursor2: &mut Cursor<Document>,
    key2: &str,
    nb: usize,
) -> Result<Vec<Document>, Error> {
    let mut result: Vec<Document> = Vec::with_capacity(nb);
    let vector: Vec<Document> = cursor1.try_collect().await?;

    while let Some(c) = cursor2.try_next().await? {
        if result.len() >= result.capacity() {
            break;
        }

        if let Some(c_id) = c.get(key2) {
            if let Some(d) = vector
                .iter()
                .find(|x| x.get(key1).map(|e| e == c_id).unwrap_or(false))
            {
                result.push(d.to_owned());
            }
        }
    }

    Ok(result)
}
