resource "google_cloud_run_service" "steffi" {
  name     = "steffi"
  project  = var.project_id
  location = var.region

  template {
    spec {
      containers {
        image = var.container_images.steffi
        env {
          name = "DATABASE_URL"

          value_from {
            secret_key_ref {
              key  = "latest"
              name = "DATABASE_URL"
            }
          }
        }
      }
    }
  }
}
