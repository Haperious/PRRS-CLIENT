var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');

app.use(cors())

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public/merchant')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname  )
  }
})


var upload = multer({ storage: storage,  limits: { fileSize: 300000 }}).any('files')
//.any('file')

app.post('/upload',function(req, res) {

    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.files)

    })

});

app.listen(5000, function() {

    console.log('App running on port 5000');

});

app.use(express.static('public'));