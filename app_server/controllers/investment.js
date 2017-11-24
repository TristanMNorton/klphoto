

var weddings = {
        toHave: {
            price: '$2500*',
            includes: [
                'Consultation with photographers',
                '6 hours of coverage',
                '2 photographers',
                'Flash drive with edited images',
                'Online viewing gallery',
                'Print release'
            ],
            bonus: [
            ]
        },
        forBetter: {
            price: '$3200*',
            includes: [
                'Consultation with photographers',
                '8 hours of coverage',
                '2 photographers',
                'Flash drive with edited images',
                'Online viewing gallery',
                'Print release'
            ],
            bonus: [
            ]
        },
        tilDeath: {
            price: '$4000*',
            includes: [
                'Consultation with photographers',
                '10 hours of coverage',
                '2 photographers',
                'Flash drive with edited images',
                'Online viewing gallery',
                'Print release'
            ],
            bonus: [
            ]
        }
    };




module.exports.babyInvest = function(req, res) {
    res.render('investment',  { 
        title: 'Baby\'s First Year Packages', 
        pricing: [{
            title:'BUN IN THE OVEN', 
            price: '$350 (+$50/extra hour)*',
            includes: [
                'Up to 2 hours',
                'Multiple locations/outfit changes',
                'Flash drive with edited images',
                'Online viewing gallery',
                'Print release'
            ],
            bonus: [
                '*+$100 for pregnancy announcement design',
                '*Gender reveal options available upon request'
            ]
        },
        {
            title:'WELCOME HOME, BABY!', 
            price: '$500 (+$50/extra hour)',
            includes: [
                'Up to 4 hours',
                'Half-day, in home, documentary style photoshoot',
                'Flash drive with edited images',
                'Online viewing gallery',
                'Print release'
            ],
            bonus: []
            },
            {
            title:'I\'m "ONE-DERFUL"', 
            price: '$350 (+$50/extra hour)*',
            includes: [
                'Up to 4 hours',
                'Multiple outfits, cake smash, family portraits',
                'Flash drive with edited images',
                'Online viewing gallery',
                'Print release'
            ],
            bonus: []
        },
        {
            title:'BUNDLE OF JOY', 
            price: '$900*',
            includes: [
                'Maternity "Bun in the Oven" session',
                'Newborn "Welcome Home, Baby!" session',
                'First Birthday "I\'m \'One-derful\'"'
            ],
            bonus: [
                '*Pregnancy announcement, gender reveal, birthday party coverage available as add-ons'
            ]
        }]
    });
};

module.exports.portInvest = function(req, res) {
    res.render('investment',  { 
        title: 'Portrait Packages', 
        pricing: [
            {
                title: 'SENIOR PORTRAITS & HEADSHOTS',
                price: '$300 (+$50/extra hour)*',
                includes: [
                    '1 hour',
                    'Up to 25 images',
                    'Multiple locations/outfit changes',
                    'Flash drive with edited images',
                    'Print release'
                ],
                bonus: [
                ]
            },
            {
                title: 'FAMILY PHOTO SESSIONS',
                price: '$350 (+$50/extra hour)',
                includes: [
                    'Up to 2 hours',
                    'Multiple locations/outfit changes',
                    'Flash drive with edited images',
                    'Online viewing gallery',
                    'Print release'
                ],
                bonus: [
                ]
            },
            {
                title: 'ENGAGEMENT',
                price: '$450 (+$50/extra hour)*',
                includes: [
                    'Up to 3 hours',
                    'Multiple locations/outfit changes',
                    'Flash drive with edited images',
                    'Online viewing gallery',
                    'Print release'
                ],
                bonus: [
                    '*+$100 for save the date design',
                    '*Package deal: Book a wedding package with your engagement session and $100 will go towards the big day.'
                ]
            }
        ]
    });
};

module.exports.wedInvest = function(req, res) {
    res.render('investment',  { 
        title: 'Wedding Packages', 
        pricing: [
            {
                title: 'TO HAVE AND TO HOLD',
                price: '$2500*',
                includes: [
                    'Consultation with photographers',
                    '6 hours of coverage',
                    '2 photographers',
                    'Flash drive with edited images',
                    'Online viewing gallery',
                    'Print release'
                ],
                bonus: [
                ]
            },
            {
                title: 'FOR BETTER, FOR WORSE',
                price: '$3200*',
                includes: [
                    'Consultation with photographers',
                    '8 hours of coverage',
                    '2 photographers',
                    'Flash drive with edited images',
                    'Online viewing gallery',
                    'Print release'
                ],
                bonus: [
                ]
            },
            {
                title: 'TIL DEATH DO US PART',
                price: '$4000*',
                includes: [
                    'Consultation with photographers',
                    '10 hours of coverage',
                    '2 photographers',
                    'Flash drive with edited images',
                    'Online viewing gallery',
                    'Print release'
                ],
                bonus: [
                ]
            }
        ]
    });
};

