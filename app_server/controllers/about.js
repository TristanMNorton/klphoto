module.exports.aboutus = function(req, res) {
    res.render('index',  { title: 'About Us' })
};

module.exports.contact = function(req, res) {
    res.render('index',  { title: 'Contact Us' })
};