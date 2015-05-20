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
	var subscribers = Subscriber.find(function (err,subscribers) {
		if (err) return console.error(err);
		return subscribers;
	});
    response.render('subscribers', {
        errors: request.flash('errors'),
        successes: request.flash('successes'),
		subscribers: subscribers
    });
};