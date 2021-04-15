var app = new Vue({
    el: '#vue_header',
    data: {
        nav: [
            "Home", "About", "Services", "Pricing", "Blog"
        ],
        openHours: [
            "Mon - Sat - 9:00 - 18:00"
        ],
        numbers: [
            "+1 (305) 1234-5678"
        ],
        mails: [
            "hello@example.com"
        ],
        icons: [
            "fab fa-facebook-f",
            "fab fa-twitter",
            "fab fa-linkedin-in"
        ]
    },
    methods: {}
})

var appDue = new Vue({
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
                contacts: [
                    "+1 (305) 1234-5678",
                    "hello@example.com",
                    "Main Avenue, 987"
                ]
            },
            {
                icons: [
                    "fas fa-phone-alt",
                    "fas fa-envelope",
                    "fas fa-map-marker-alt"
                ]
            }
        ]
    }
})


Vue.config.devtools = true;