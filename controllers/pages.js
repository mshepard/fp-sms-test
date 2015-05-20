var Subscriber = require('../models/Subscriber');

// Render a form to send an MMS message
exports.showForm = function(request, response) {
	// Render form, with any success or error flash messages
	response.render('index', {
		errors: request.flash('errors'),
		successes: request.flash('successes')
	});
};
// Render a list of subscribers
exports.listSubscribers = function(request, response) {
	Subscriber.find({}, function (err, subscribers) {
		response.render('subscribers', {
			errors: request.flash('errors'),
			successes: request.flash('successes'),
			subscribers: subscribers
		});
	});
};
