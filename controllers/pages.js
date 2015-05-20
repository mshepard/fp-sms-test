var Subscriber = require('../models/Subscriber');

// Render a form to send an MMS message
exports.showForm = function(request, response) {
    // Render form, with any success or error flash messages
    response.render('index', {
        errors: request.flash('errors'),
        successes: request.flash('successes')
    });
};
// Render subscriber list
exports.listSubscribers = function(request, response) {
    // Render form, with any success or error flash messages
	var allSubscribers = Subscriber.find(function (err,subscribersList) {
		if (err) return console.error(err);
		return subscribersList;
	});
    response.render('subscribers', {
        errors: request.flash('errors'),
        successes: request.flash('successes'),
		subscribers: allSubscribers
    });
};