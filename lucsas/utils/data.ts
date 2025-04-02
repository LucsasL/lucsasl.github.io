// Types Imports
import { StaticImageData } from "next/image";

// Image Import
import {
  code,
  lucsas,
  webDev,
  webDevBack,
  landscape,
  spring,
  summer,
  fall,
  winter,
  marknow,
  everyshop,
  bNumerical,
  ourSolarSystem,
  seo,
  design,
  webStructure,
  html,
  css,
  ts,
  js,
  react,
  nextjs,
  sass,
  python,
  jest,
  gsap,
  redux,
  git,
  htmlBig,
  cssBig,
  jsBig,
  tsBig,
  reactBig,
  sassBig,
  pythonBig,
  jestBig,
  reduxBig,
  gsapBig,
  gitBig,
  threeBig,
  githubLogo,
  gitlabLogo,
  stackoverflowLogo,
  linkedinLogo,
  instaLogo,
} from "@/utils/images";

// Components Data
export const contentWebDevPortfolio = {};

export const webNavOptions: string[] = [
  "HOME",
  "ABOUT",
  "SKILLS",
  "PROJECTS",
  "CONTACT",
];
export const webNavOptionsLink: string[] = [
  "intro",
  "services",
  "skills",
  "portfolio",
  "contact",
];

export const webIntroSect = {
  introImg: code,
  socialMedias: [
    {
      link: "http://github.com/lucsasl",
      name: "Lucsas Github",
      img: githubLogo,
    },
    {
      link: "https://gitlab.com/lucsasl",
      name: "Lucsas Gitlab",
      img: gitlabLogo,
    },
    {
      link: "https://stackoverflow.com/users/23686993/lucas-lira",
      name: "Lucsas Stack Overflow",
      img: stackoverflowLogo,
    },
    {
      link: "https://www.linkedin.com/in/lucsas/?locale=en_US",
      name: "Lucsas Linkedin",
      img: linkedinLogo,
    },
    {
      link: "https://www.instagram.com/lucsas.l/",
      name: "Lucsas Instagram",
      img: instaLogo,
    },
  ],
};

export const webServiceSect = {
  servBoxes: [
    {
      title: "Semantics and SEO",
      text: "Structuring a website semantically, respecting the basic concepts of SEO and giving meaning to the components and objects of a website.",
      img: seo,
    },
    {
      title: "Responsive Design",
      text: "Giving shapes and layouts that work in every way and applying medias that work respecting performance, making your site adapt to all sizes and devices, showing your presence everywhere.",
      img: design,
    },
    {
      title: "Dynamic Application",
      text: "Developing websites with an array of different technologies, from technologies that build simple components to others that make complex structures with great architecture.",
      img: webStructure,
    },
  ],
};

type AboutSectShape = {
  aboutImg: StaticImageData;
};

export const webAboutSect: AboutSectShape = {
  aboutImg: lucsas,
};

export const webSkillsSect = {
  sectImg: [webDev, webDevBack],
  areaDesc: ["", ""],

  techStack: {
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next",
      "SASS",
      "GSAP",
      "Jest",
      "Redux",
      "Python",
      "Git",
    ],
    imgs: [
      html,
      css,
      js,
      ts,
      react,
      nextjs,
      sass,
      gsap,
      jest,
      redux,
      python,
      git,
    ],
    techDesc: [
      "The technology that gives meaning to websites through tags, building the document that you see in the browser.",
      "The combination between the HTML tags and stylesheets of CSS do the work for static websites, making possible to add layouts, positions, responsiveness and animations.",
      "The technology that make things more interesting and add relevant features to a dynamic experience. With all of it's libraries, frameworks and DOM Manipulation bringing value, making the tech essential for web development.",
      "Programming a web app with TypeScript is like using JavaScript with superpowers. It makes your code more succinct and organized by adding types to variables and giving you complete control over the algorithm. This way, the architecture of your application becomes more manageable.",
      "Great Architecture and organization is what builds React JS, A technology that not only bring all the features of HTML, CSS and JavaScript combined, but enhance it as well, bringing state management, routers, and even more abstraction to your app.",
      "Preprocessor of CSS that brings programming to the stylesheets of CSS, with handy and different ways to write styles, including mixins, partials and even programming features such as variables and structures.",
      "A framework that works with React to optimize SEO and enhance your web application.",
      "A JavaScript library that makes the animations of your website more manageable, bringing countless of methods to animate and control colors, positions and triggers of the elements of your site, adding more tools to create a better experience.",
      "Easy tests for your applications is with Jest, a simple tool that shows the outputs of your functions and methods and predict precisely what will happen with your algorithms and displays.",
      "State management at its finest: Redux is a tool that makes your structure more cohesive. It creates stores that connect with all the components of your React app and saves all the slices of your application.",
      "Back-end development with a high-level programming language that is widely used and efficient for data processing and adding to the building of a full applications.",
      "An essential tool for project management and version control that made web development safer. As an application grow, so do the packages and features of such, there is where Git fits in, it's a useful tool for controlling the versions of your software.",
    ],
    techFeature: [
      "Strong Type Variables",
      "Great Architecture",
      "Controlled Application",
      "StyleSheets",
      "Testing our algorithms",
      "Managing the State of our application",
      "Adding depth to our Website",
      "Control over the projects",
    ],
  },
  laptopBgImg: [spring, summer, fall, winter, landscape],
  laptopNav: ["Spring", "Summer", "Fall", "Winter"],
};

export const webProjectsSect = {
  sectTitle: "In what projects did you work?",
  projects: [
    {
      projLink: "https://marknow-lemon.vercel.app/",
      projTitle: "MARKNOW",
      projSubtitle: "A Digital Marketing Agency that brings the success",
      projDesc:
        "MARKNOW is a web project showcasing a digital marketing company that has great feats and partners. Fully build with React JS and it's technologies. It has several features, such as Hooks, States and Routers. | WORK IN PROGRESS",
      projImgDesc: "Markdown project image",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React JS",
        "SASS",
        "GSAP",
        "Jest",
        "Git",
      ],
      techStackImg: [
        htmlBig,
        cssBig,
        jsBig,
        tsBig,
        reactBig,
        sassBig,
        gsapBig,
        jestBig,
        gitBig,
      ],
      projImg: marknow,
    },
    {
      projLink: "https://every-shop.vercel.app/",
      projTitle: "Everyshop",
      projSubtitle: "A shop that sells everything",
      projDesc:
        "EVERYSHOP is a web project of a shop that sells everything. Developed in React JS including SASS and responsive design. | WORK IN PROGRESS",
      projImgDesc: "Everyshop project image",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React JS",
        "SASS",
        "GSAP",
        "Redux",
        "Jest",
        "Git",
      ],
      techStackImg: [
        htmlBig,
        cssBig,
        jsBig,
        tsBig,
        reactBig,
        sassBig,
        gsapBig,
        reduxBig,
        jestBig,
        gitBig,
      ],
      projImg: everyshop,
    },
    {
      projLink: "#",
      projTitle: "B-Numerical",
      projSubtitle: "Converter of numerical bases",
      projDesc: "Numerical Base Converter | WORK IN PROGRESS",
      projImgDesc: "Numerical Base Converter image",
      techStack: ["Python"],
      techStackImg: [pythonBig],
      projImg: bNumerical,
    },
    {
      projLink: "https://our-solar-system-psi.vercel.app/",
      projTitle: "Our Solar System",
      projSubtitle: "A 3D environment showing our solar system",
      projDesc:
        "A 3D environment of our solar system build with JavaScript and three.js | WORK IN PROGRESS",
      projImgDesc: "Everyshop project image",
      techStack: ["HTML", "CSS", "JavaScript", "Three.js"],
      techStackImg: [htmlBig, cssBig, jsBig, threeBig],
      projImg: ourSolarSystem,
    },
  ],
};
