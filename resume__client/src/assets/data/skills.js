const skills = {
    skills__programming: [
        {
            name: "Javascript",
            rating: 4,
            description: null,
            hasLink: false,
            linkURL: null,
            linkName: null,
            hasLib: true,
            lib: [
                {
                    name: "ReactJS",
                    description: "Self-guided education starting with fundamental JS and jQuery, leading to formal education in ReactJS UI framework. Designs frontend SPA interfaces with Redux and Context API architecture represented in data management strategy. Strong confidence in programming data consumption from API sources, and rendering dynamic interfaces based on dynamic data.",
                    hasLink: false,
                    linkURL: null,
                    linkName: "[this website is built with React!]"
                },
                {
                    name: "NodeJS",
                    description: "Built lite servers using Express library to support application interfaces. Incoming and outgoing data managed with utility functions written with Knex library utilizing SQlite3. Skilled in automated testing with Jest and Supertest libraries on endpoints.",
                    hasLink: true,
                    linkURL: "https://github.com/Water-My-Plants-BW-4/backend",
                    linkName: "Water My Plants: Database Arch."
                }
            ]
        }, 
        {
            name: "",
            rating: 4,
            description: "",
            hasLink: true,
            linkURL: "",
            linkName: "",
            hasLib: false,
            lib: null
        },
        {
            name: "",
            rating: 4,
            description: "",
            hasLink: true,
            linkURL: "",
            linkName: "",
            hasLib: false,
            lib: null
        }
    ],

    skills__media: [
        {
            name: "Adobe Indesign & Illustrator",
            rating: 5,
            description: "Utilizing a combined approach between the softwares, built published report documents and promotional content (posters, web content, infographics) for a variety of use and purposes. Each design is methodically approached with consideration of organization of imagery and typography for commercial and illustrative application. Formal education from undergraduate pursuits in Visual Communication Design, with 3+ years on job experience.",
            hasLink: true,
            linkURL: "https://www.behance.net/gallery/76482887/DIY-Midwest-Show-Promo",
            linkName: "DIY Midwest | Show Promo"
        },
        {
            name: "Adobe Lightroom & Photoshop",
            rating: 4,
            description: "Extending 8+ years of informal guided education, with 3+ years of formal education and on-job experience, produced a wide variety of creative and pragmatic images with combined use of Photoshop + Lightroom for image clean up and enhancement. Additional work with other Adobe Creative Cloud applications to generate dynamic and design-consistent deliverables with high quality graphics and image resolution. ",
            hasLink: true,
            linkURL: "https://www.behance.net/gallery/65202139/Inertia-Ashton",
            linkName: "Inertia: Ashton",
        },
        {
            name: "Logic & Front of House Controll Systems",
            rating: 4,
            description: "Following 10+ years of self-guided learning, and 3 years of on-job experience, thorough working knowledge of in-studio and FOH softwares with signal flow optimization through sub-bus mixing. Advanced knowledge of acoustic dynamics and digital compensation strategies applicable to FOH and in-studio scenarios.",
            hasLink: true,
            linkURL: "https://open.spotify.com/album/37x6kmbQCbfojyPVJCSPve?highlight=spotify:track:176RnNiv4FZtOh7bbLc0tL",
            linkName: "Joyd Parker: All Joy",
        },
        {
            name: "Final Cut X",
            rating: 3,
            description: "5+ years of self guided learning and project planning, creating promotional video capture and editing, involving principals adn technical knowledge gathered during formal Photographic Illustration pursuits. Working knowledge of color filters, audio editing & mixing, and story editing among other areas.",
            hasLink: true,
            linkURL: "https://www.behance.net/gallery/76662317/JOYD-PARKER-Winter-Promo-Reel",
            linkName: "Joyd Parker: Winter Promo Reel",
        }
    ],

    skills__ecomm: [
        {
            name: "Helium 10",
            rating: 4,
            decription: "Managed Amazon product listing success and performed array of analytics-driven reports generated from Helium10 suite of tools. Derived keyword strategies and SEO optimization practice for new listings, as well as wrote key-word-laden production copy for ehanced SEO indexing.",
            linkURL: null,
            linkName: null
        },
        {
            name: "Microsoft Excel",
            rating: 5,
            decription: "Extending project-reporting and expirament-monitoring skills gained during high-school with a formal education in analytical decision making for marketing application, utilized excel to drive  keyword strategy and reporting projects by writing rules and generating pivot tables for data insights. Additional experience modifying and writing macros for product information sheets used to interface with Amazon listings backend portal.",
            linkURL: "https://www.behance.net/gallery/84709585/CardinalCommerce-Reporting-Dashboard",
            linkName: "Cardinal Commerce: Reporting Dashboard"
        }
    ]
}

export default skills;


// ! data map of object for each skills section 

// * PROGRAMMING 
// const skills__programming = {
//     LANG: {
//         name: "",
//         rating: 4,
//         description: "",
//         hasLink: true,
//         linkURL: "",
//         linkName: "",
//         hasLib: true,
//         lib: {
//             LIB: {
//                 name: "",
//                 description: "",
//                 hasLink: true,
//                 linkURL: "",
//                 linkName: ""
//             }
//         }
//     }
// }

// * MEDIA 
// const skills__media = {
//     TOOL: {
//         name: "",
//         rating: 4,
//         decription: "",
//         linkURL: "",
//         linkName: "",
//     }
// }

// * ECOMM
// const skills__ecomm = {
//     TOOL: {
//         name: "",
//         rating: 4,
//         decription: "",
//         linkURL: "",
//         linkName: ""
//     }
// } 
