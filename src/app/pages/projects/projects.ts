import { Project } from "./project";

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Seating App",
        description: "MEAN Stack Web Application",
        about: "The Seating-App was founded by a group of University of South Carolina students who wanted to provide a useful tool for restaurant owners in Columbia, SC. We realized that many of these owners could benefit from a web application that efficiently sat customers at tables, tracked reservations, and provided real time statistics in order to make business decisions.",
        features: [
            "Angular 7, Node.js, Express, Mongoose",
            "Password hashing and session tokens",
            "Fluid UI reactions to user selection",
            "RESTful API and CRUD database operations",
            "Jasmine and Karma unit testing",
            "Selenium behavioral testing",
            "Interactive floorplans built with Fabric.js framework",
            "AWS Elastic Beanstalk and MongoDB hosting"
        ],
        pictures: [
            "assets/images/seatingapp.png",
            "assets/images/seatingapp1.png",
            "assets/images/seatingapp2.png",
            "assets/images/seatingapp4.png"
        ],
        source: ""
    },
    {
        id: 2,
        title: "Jill Sells the Carolinas",
        description: "Angular & Node Web Application",
        about: "Client needed ability to showcase her capabilities and services as a real estate agent for Kellar Williams Reality. She needed ability to grab potential client information via an email form. Other bonuses she needed including allowing potential clients to search properties, along with promoting herself through social media links, books, and SEO.",
        features: [
            "Angular 7, Node.js, Bootstrap",
            "Local property listings pulled from listings API",
            "Contact forms to retrieve potential client information made with Nodemailer and AWS-SDK",
            "Contact form validation includes Google reCaptcha",
            "SEO optimization and Google Analytics",
            "AWS ElasticBeanstalk and AWS SES hosting"
        ],
        pictures: [
            "assets/images/jillrealtor2.png",
            "assets/images/jillrealtor.png",
            "assets/images/jillrealtor3.png"
        ],
        source: ""
    },
    {
        id: 3,
        title: "Graphics",
        description: "",
        about: "",
        features: [],
        pictures: [
            "assets/images/dailyui-002.png",
            "assets/images/dailyui-001.png",
            "assets/images/healthyvending1.png",
            "assets/images/togo-menu-v3.png"
        ],
        source: ""
    },
    {
        id: 4,
        title: "2022 Portfolio",
        description: "Angular Website",
        about: "Newest take my portfolio website",
        features: [
            "Angular 13 and Bootstrap",
            "Github action pipeline for automatic deployments",
            "AWS S3"
        ],
        pictures: [],
        source: ""
    },
    {
        id: 5,
        title: "2019 Portfolio",
        description: "React Website",
        about: "This was a second take on my portfolio. Instead of having an SPA feel that was chunky and reduced inital load times, I broke sections up into primary categories to create a muiti page UX focused feel with the help of react-router-dom. From my research of top portfolios for web designers I learned that it was most important to display work first, this was the biggest change between projects allowing me to be more creative with my work section. This project has a ton of customization from fonts, buttons, divs, mobile nav, and so much more to make this website as mobile friendly as it is on desktop.",
        features: [
            "React and Bootstrap",
            "React router dom used for component changes and navigation",
            "SASS built stylesheets",
            "Full mobile to desktop customization",
            "AWS S3 bucket hosting"
        ],
        pictures: [
            "assets/images/portfolio1.png",
            "assets/images/portfolio.png",
            "assets/images/portfolio2.png",
            "assets/images/portfolio3.png"
        ],
        source: ""
    },
    {
        id: 6,
        title: "2017 Portfolio",
        description: "React Website",
        about: "This was my first take on my portfolio built in React just to get some experience with the library. Complete SPA design with react-scroll to add fluid scrolling from the navbar between sections. Loads of custom CSS to produce a fluid desktop to mobile website, along with providing a clean cut display of my skills, projects, and contact information.",
        features: [
            "React and Bootstrap",
            "Lots of custom CSS to build unique SPA design",
            "Full mobile to desktop customization",
            "AWS S3 bucket hosting"
        ],
        pictures: [
            "assets/images/portfolio-old1.png",
            "assets/images/portfolio-old2.png",
            "assets/images/portfolio-old3.png",
            "assets/images/portfolio-old4.png"
        ],
        source: ""
    }
];