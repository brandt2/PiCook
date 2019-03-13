const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const express = require("express");
const router = express.Router();
const axios = require("axios");
const vision = require("@google-cloud/vision");

const {
  bucket,
  accessKeyId,
  awsSecretAccessKey,
  region,
  visionApiKey
} = require("../../config/keys_dev");

aws.config.update({
  secretAccessKey: awsSecretAccessKey,

  accessKeyId: accessKeyId,
  region: region
});

const s3 = new aws.S3();
const client = new vision.ImageAnnotatorClient({
  keyFilename: "./vision-35b393df78d3.json"
});
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: bucket,
    acl: "public-read",
    metadata: function(req, file, cb) {
      cb(null, {
        ["Content-Type"]: "applicaion",
        ["x-amz-meta-fieldname"]: "image"
      });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

const singleUpload = upload.single("image");

router.post("/", function(req, res) {
  saveS3(req, res)
    .then(img => {
      return getLabelByUrl(img.imageUrl);
    })
    .then(result => {
      const labels = result[0].labelAnnotations;
      return res.json(labels);
    })
    .catch(err => console.log(err));
});

function saveS3(req, res) {
  return new Promise(resolve => {
    singleUpload(req, res, function(err, some) {
      if (err) {
        return res.status(422).send({
          errors: [{ title: "Image Upload Error", detail: err.message }]
        });
      }
      resolve({ imageUrl: req.file.location });
    });
  });
}

function getLabelByUrl(request) {
  return client.labelDetection(request);
}

module.exports = router;
