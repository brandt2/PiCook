const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const express = require('express');
const router = express.Router();
const {bucket, accessKeyId, awsSecretAccessKey, region}  = require('../../config/keys');

aws.config.update({
    secretAccessKey: awsSecretAccessKey,
    
    accessKeyId: accessKeyId,
    region: region
});

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: bucket,
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { 
                ['Content-Type']: 'applicaion',
                ['x-amz-meta-fieldname'] : 'image'
            });
        },
        key: function(req, file, cb) {
            cb(null, Date.now().toString());
        }
    })
});

const singleUpload = upload.single('image')

router.post('/', function(req, res) {
    singleUpload(req, res, function(err, some) {
        if (err) {
            return res.status(422).send({
                errors: [
                    {title: 'Image Upload Error', detail: err.message}
                ]
            });
        }

        return res.json({'imageUrl': req.file.location});
    });
});

module.exports = router;



