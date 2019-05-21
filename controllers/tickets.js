var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

function newTicket(req, res) {
    res.render('tickets/new')
}

function create(req, res) {
    var ticket = new Ticket(req.body);
    ticket.save(function(err) {
        if (err) return res.render('/flights/:id/tickets/new');
        console.log(ticket);
        res.redirect(`flights/${flight._id}`)
    });
}


function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show',{
                ticket});
        });
    });
}


  
module.exports = {
    new: newTicket,
    create,
    show
}