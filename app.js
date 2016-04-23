var express = require('express');
var request = require('request');
var cheerio = require("cheerio");
var app = express();

app.get('/', function (req, res) {
	// 爬虫系统
	request('http://www.18jdm.com/', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    // console.log(body) // Show the HTML for the Google homepage. 
	    $ = cheerio.load(body);
	    res.json({
	    	'classnum':$('.banner .hd ul li').length,
	    })
	  }
	})
});

var server = app.listen(3000, function () {
var host = server.address().address;
var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});