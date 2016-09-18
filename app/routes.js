// grab the nerd model

var Nerd = require('./models/nerd');

module.exports = function(app) {


// server routes ======
// handle things like api calls, authentication routes

// sample api route

 app.get('/api/nerds', function(req, res) {
// use mongoose to get all nerds
Nerd.find(function(err, nerds) {

	if (err)
		res.send(err);

	res.json(nerds);
   });
});

// route to handle creating goes here (app.post)
// route to handle delete goes here (app.delete)

// frontend routes
// route to ahndlw all angular requests
app.get('*', function(req, res) {
res.sendfile('./public/views/index.html'); // load our index.html file
});

};

