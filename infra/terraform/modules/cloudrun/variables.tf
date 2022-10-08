variable "project_id" {}
variable "region" {}
variable "container_images" {
  type = object({
    steffi = string
  })
}
