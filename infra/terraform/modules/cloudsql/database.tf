resource "google_sql_database" "steffi" {
  name      = "steffi"
  project   = var.project_id
  instance  = "steffi"
  charset   = "UTF8"
  collation = "en_US.UTF8"
}

resource "random_id" "db_name_suffix" {
  byte_length = 4
}

resource "google_sql_database_instance" "master" {
  database_version = "POSTGRES_14"
  name             = "steffi-${random_id.db_name_suffix.hex}"
  project          = var.project_id
  region           = var.region
}
