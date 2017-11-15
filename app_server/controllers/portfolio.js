module.exports.weddings = function(req, res) {
    res.render('index',  { title: 'Weddings Portfolio' })
};

module.exports.portraits = function(req, res) {
    res.render('index',  { title: 'Portrait Portfolio' })
};

module.exports.babies = function(req, res) {
    res.render('index',  { title: 'Babies Portfolio' })
};