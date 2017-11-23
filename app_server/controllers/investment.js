var babyFirstYear = {
    bunInTheOven: {
        price: '$350 (+$50/extra hour)*',
        includes: [
            'Up to 2 hours',
            'Multiple locations/outfit changes',
            'Flash drive with edited images',
            'Online viewing gallery',
            'Print release'
        ]
        bonus: [
            '*+$100 for pregnancy announcement design',
            '*Gender reveal options available upon request'
        ]
    },
    welcomeHome: {
        price: '$350 (+$50/extra hour)*',
        includes: [
            'Up to 4 hours',
            'Half-day, in home, documentary style photoshoot',
            'Flash drive with edited images',
            'Online viewing gallery',
            'Print release'
        ]
        bonus: [
            '*+$100 for pregnancy announcement design',
            '*Gender reveal options available upon request'
        ]
    },
    imOne: {

    },
    bundleJoy: {

    }
}




module.exports.investment = function(req, res) {
    res.render('index',  { 
        title: 'Investment', })
};
