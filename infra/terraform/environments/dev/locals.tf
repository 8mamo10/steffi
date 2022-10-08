locals {
  project_id = "steffi-dev-363816"

  region = "asia-northeast1"
  zone   = "asia-northeast1-a"
  container_images = {
    "steffi" : "asia-northeast1-docker.pkg.dev/steffi-dev-363816/steffi/steffi@sha256:080dbb2fae786fceed88ca205104787ce5233f85713ee264dd353e34d15be300"
  }
}
