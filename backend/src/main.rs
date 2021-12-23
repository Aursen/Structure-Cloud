use actix_files::Files;
use actix_web::{middleware::Logger, web, App, HttpResponse, HttpServer};
use std::env;

#[actix_web::main]
async fn main() -> Result<(), std::io::Error> {
    dotenv::dotenv().ok();

    let port = env::var("PORT").unwrap_or_else(|_| "8080".to_string());

    HttpServer::new(|| {
        App::new()
            .wrap(Logger::default())
            .service(Files::new("/", env::var("FRONT_PATH").unwrap()).index_file("index.html"))
            .default_service(web::route().to(HttpResponse::NotFound))
    })
    .bind(format!("0.0.0.0:{}", port))?
    .run()
    .await
}
