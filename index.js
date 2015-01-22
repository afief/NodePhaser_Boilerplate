var express = require('express');
var app = express();
var http = require('http').Server(app);

var inmo_template	= require('./renderEngine.js')(app);

app.set("views", "./")
app.get("/", function(req, res) {
	app.set("view engine", "html");
	res.render(__dirname + "/game/index.html", {});
});

app.get("/scss/:file", function(req, res) {
 	app.set("view engine", "scss");
 	res.type("css");
 	res.render(__dirname + "/game/scss/" + req.params.file);
});

// app.use('/control', express.static(__dirname + '/control/'));
// app.use('/game', express.static(__dirname + '/game/'));

app.use(errorHandler);
function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error.html', { error: err });
}

http.listen(81, function() {
	console.log("listen to 81");
});