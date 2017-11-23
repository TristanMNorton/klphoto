var dir = require('node-dir');

// Scanning directories to return image file names to be used in DOM
var babiesPhotos = removePublic(dir.files('public/images/portfolio/babiesfirstyear', {sync:true}));
var portFamilyPhotos = removePublic(dir.files('public/images/portfolio/portraits/familyportraits', {sync:true}));
var portHeadshotPhotos = removePublic(dir.files('public/images/portfolio/portraits/headshots', {sync:true}));
var portSeniorPhotos = removePublic(dir.files('public/images/portfolio/portraits/senior', {sync:true}));
var engagementPhotos = removePublic(dir.files('public/images/portfolio/weddings/engagement', {sync:true}));
var weddingsPhotos = removePublic(dir.files('public/images/portfolio/weddings/weddings', {sync:true}));

// Passes array of image locations and removes unecessary "public" 
function removePublic(str) {
    var correctDirectory = [];
    for(i = 0; i < str.length; i++) {
        correctDirectory[i] = str[i].substring(str[i].indexOf("images") - 1);
    };
    return correctDirectory;
};

module.exports = function(req, res) {
    res.render('portfolio',  { title: 'Portfolio' })
};

module.exports.weddingsEngage = function(req, res) {
    res.render('portdisplay',  { di: engagementPhotos });
}; 

module.exports.weddings = function(req, res) {
    res.render('portdisplay',  { di: weddingsPhotos })
};

module.exports.portraitsFamily = function(req, res) {
    res.render('portdisplay',  { di: portFamilyPhotos })
};

module.exports.portraitsHead = function(req, res) {
    res.render('portdisplay',  { di: portHeadshotPhotos })
};

module.exports.portraitsSenior = function(req, res) {
    res.render('portdisplay',  { di: portSeniorPhotos })
};

module.exports.babies = function(req, res) {
    res.render('portdisplay',  { di: babiesPhotos })
};

