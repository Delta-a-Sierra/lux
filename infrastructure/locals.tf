locals {
  s3_origin_id = "myS3Origin"

  db_cname = "${var.a_record_name}-db.${var.domain_name}"

  tags = {
    Project     = var.project_name
    Environment = var.environment
  }

  public_key = var.public_key == "" ? file("~/.ssh/${var.key_name}.pub") : var.public_key
}