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
	var items = Subscriber.listAll();
    response.render('subscribers', {
        errors: request.flash('errors'),
        successes: request.flash('successes'),
		items: items
    });
};