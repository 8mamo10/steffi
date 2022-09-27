terraform {
  backend "gcs" {
    bucket = "steffi-tfstate"
  }
}
