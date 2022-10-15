resource "google_sql_database" "steffi" {
  name      = "steffi"
  project   = var.project_id
  instance  = "steffi"
  charset   = "UTF8"
  collation = "en_US.UTF8"
}
