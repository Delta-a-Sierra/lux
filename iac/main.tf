terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "tf-state.bucket"
    key    = "lux/terraform.tfstate"
    region = "eu-west-1"
  }
}


provider "aws" {
  region = "eu-west-1"
  default_tags {
    tags = merge(var.common_tags, {
      environment = var.environment
      region      = var.region
    })
  }
}
