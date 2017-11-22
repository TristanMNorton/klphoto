var dir = require('node-dir');

// Scanning directories to return image file names to be used in DOM
var babiesPhotos = dir.files('public/images/portfolio/babiesfirstyear', {sync:true});
var portFamilyPhotos = dir.files('public/images/portfolio/portraits/familyportraits', {sync:true});
var portHeadshotPhotos = dir.files('public/images/portfolio/portraits/headshots', {sync:true});
var portSeniorPhotos = dir.files('public/images/portfolio/portraits/senior', {sync:true});
var engagementPhotos = dir.files('public/images/portfolio/weddings/engagement', {sync:true});
var weddingsPhotos = dir.files('public/images/portfolio/weddings/weddings', {sync:true});


module.exports = function(req, res) {
    res.render('portfolio',  { title: 'Weddings Portfolio' })
};

module.exports.weddingsEngage = function(req, res) {
    res.render('portEngagement',  { di: engagementPhotos });
};

module.exports.weddings = function(req, res) {
    res.render('index',  { title: 'Weddings Portfolio' })
};

module.exports.portraits = function(req, res) {
    res.render('index',  { title: 'Portrait Portfolio' })
};

module.exports.babies = function(req, res) {
    res.render('index',  { title: 'Babies Portfolio' })
};

console.log(engagementPhotos[2]);