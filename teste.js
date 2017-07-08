var http = require("http");
var FormData = require('form-data');
var fs = require('fs');
var form = new FormData();
var request = require('request');

form.append('sampleFile', request('http://nodejs.org/images/'));


form.submit('http://192.168.1.11:3000/', function(err, res) {
  // res – response object (http.IncomingMessage)  //


});
