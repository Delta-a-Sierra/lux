variable "common_tags" {
  type        = map(any)
  description = "default tags to be applied to all aws resources"
  default = {
    project         = "lux"
    project_purpose = "social media application similar to facebook and twitter"
    iac             = "github.com/delta-a-sierra/lux"
  }
}

variable "environment" {
  type    = string
  default = "dev"
}

variable "region" {
  type    = string
  default = "eu-west-1"
}

variable "domain_name" {
  type    = string
  default = "lux.com"
}
