var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlPortfolio = require('../controllers/portfolio');
var ctrlAbout = require('../controllers/about');
var ctrlInvestment = require('../controllers/investment')

/* GET home page. */
router.get('/', ctrlMain.index);

/* GET portfolio pages */
router.get('/portfolio/weddings', ctrlPortfolio.weddings);
router.get('/portfolio/portraits', ctrlPortfolio.portraits);
router.get('/portfolio/babies', ctrlPortfolio.babies);

/* GET about pages */
router.get('/about/aboutus', ctrlAbout.aboutus);
router.get('/about/contact', ctrlAbout.contact);

/* GET investment pages */
router.get('/investment', ctrlInvestment.investment);

module.exports = router;
