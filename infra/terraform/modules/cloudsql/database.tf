resource "google_sql_database_instance" "steffi" {
  database_version = "POSTGRES_14"
  project          = var.project_id
  region           = var.region

  settings {
    tier = "db-f1-micro"
  }
}

resource "google_sql_database" "docker" {
  depends_on = [google_sql_database_instance.steffi]

  name      = "docker"
  project   = var.project_id
  instance  = google_sql_database_instance.steffi.name
  charset   = "UTF8"
  collation = "en_US.UTF8"
}
