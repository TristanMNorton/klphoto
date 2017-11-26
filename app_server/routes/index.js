var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlPortfolio = require('../controllers/portfolio');
var ctrlAbout = require('../controllers/about');
var ctrlInvestment = require('../controllers/investment');

/* GET home page. */
router.get('/', ctrlMain.index);

/* GET portfolio pages */
router.get('/portfolio', ctrlPortfolio)
router.get('/portfolio/weddings/engagements', ctrlPortfolio.weddingsEngage);
router.get('/portfolio/weddings/weddings', ctrlPortfolio.weddings);
router.get('/portfolio/portraits/family', ctrlPortfolio.portraitsFamily);
router.get('/portfolio/portraits/headshots', ctrlPortfolio.portraitsHead);
router.get('/portfolio/portraits/senior', ctrlPortfolio.portraitsSenior);
router.get('/portfolio/babies', ctrlPortfolio.babies);

/* GET about pages */
router.get('/aboutus', ctrlAbout.aboutus);

/* GET investment pages */
router.get('/investment/babies', ctrlInvestment.babyInvest);
router.get('/investment/portraits', ctrlInvestment.portInvest);
router.get('/investment/weddings', ctrlInvestment.wedInvest);

module.exports = router;
