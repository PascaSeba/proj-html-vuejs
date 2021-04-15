var app = new Vue({
    el: '#vue_header',
    data: {
        openHours: {
            openingDay: 'Mon - ',
            closingDay: ' Sat',
            openingHour: ' - 09:00 - ',
            closingHour: '18:00'
        },
        nav: [
            "Home", "About", "Services", "Pricing", "Blog"
        ],
        tracking: [{
                name: "telephone",
                icon: "fas fa-phone-alt",
                value: "+1 (305) 1234-5678"
            },
            {
                name: "mail",
                icon: "fas fa-envelope",
                value: "hello@example.com"
            }
        ],
        icons: [
            "fab fa-facebook-f",
            "fab fa-twitter",
            "fab fa-linkedin-in"
        ]
    },
    methods: {}
})

var appTwo = new Vue({
    el: '#vue_footer',
    data: {
        footerInfos: [{
                title: "About",
                nav: [
                    "The Company",
                    "Institutional",
                    "Social & Events",
                    "Innovation",
                    "Environment",
                    "Technology"
                ]
            },

            {
                title: "Services",
                nav: [
                    "Audit & Assurance",
                    "Financial Advisory",
                    "Analytics M&A",
                    "Middle Marketing",
                    "Legal Consulting",
                    "Regulatory Risk"
                ]
            },

            {
                title: "Support",
                nav: [
                    "Responsability",
                    "Terms of Use",
                    "About Cookies",
                    "Privacy Policy",
                    "Accessibility",
                    "Information"
                ]
            }
        ],
        tracking: [{
                name: "telephone",
                icon: "fas fa-phone-alt",
                value: "+1 (305) 1234-5678"
            },
            {
                name: "mail",
                icon: "fas fa-envelope",
                value: "hello@example.com"
            },
            {
                name: "position",
                icon: "fas fa-map-marker-alt",
                value: "Main Avenue, 987"
            }
        ]
    }
})


Vue.config.devtools = true;