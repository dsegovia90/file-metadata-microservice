var express = require('express')
var app = express()
var multer = require('multer')
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

var mongo = require('mongodb').MongoClient
var PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
	res.render('index')
})

app.post('/get-file-size', upload.single('file'), function(req, res) {
	console.log(req.file.size)
	res.end(JSON.stringify({ fileSize: req.file.size + " bytes"}))
})




app.listen(PORT, function(){
	console.log('Listening on port ', PORT)
}) 