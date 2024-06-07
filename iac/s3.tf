resource "aws_s3_bucket" "this" {
  bucket = "s3b-${var.common_tags.project}-${var.environment}-${var.region}"

  tags = {
    Name = "s3b-${var.common_tags.project}-${var.environment}-${var.region}"
  }
}


resource "aws_s3_bucket_acl" "public_read" {
  bucket = aws_s3_bucket.this.bucket
  acl    = "public-read"
}

resource "aws_s3_bucket_website_configuration" "this" {
  bucket = aws_s3_bucket.this.bucket

  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_bucket_policy" "allow_access_from_cloudfront" {
  bucket = aws_s3_bucket.this.bucket
  policy = templatefile("files/bucket_policy.tftpl", { bucket_arn = aws_s3_bucket.this.arn, oai_id = aws_cloudfront_origin_access_identity.this.id })
}
