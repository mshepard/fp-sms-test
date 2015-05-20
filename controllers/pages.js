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
	var mySubscribers = Subscriber.find({
        subscribed: true
    }, function(err, docs) {
        if (err) {
            console.error(err);
        }
        // create array of subscribers numbers
		var subscriberList = [];
        docs.forEach(function(sub) {
        	subscriberList.push(sub.phone);
        });
		return subscriberList;
    });

    response.render('subscribers', {
        errors: request.flash('errors'),
        successes: request.flash('successes'),
		subscribersListArray: mySubscribers
    });
};