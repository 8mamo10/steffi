terraform {
  backend "gcs" {
    bucket = "steffi-tfstate"
  }
}

module "cloudrun" {
  source = "../../modules/cloudrun"

  project_id       = local.project_id
  region           = local.region
  container_images = local.container_images
}
