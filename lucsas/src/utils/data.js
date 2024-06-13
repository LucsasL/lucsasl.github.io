// Import image
import code from "../img/codeIntro.png";
import webDev from "../img/webDev.webp";

import marknow from "../img/marknow-proj.png";
import everyshop from "../img/everyshop-proj.png";

import seo from "../img/setting.png";
import design from "../img/web-developer.png";
import webStructure from "../img/web-structure.png";

// Tech Stack Images Import
import html from "../img/html5.webp";
import css from "../img/css3.webp";
import ts from "../img/typescript.webp";
import js from "../img/JS.webp";
import react from "../img/react.webp";
import sass from "../img/sass.webp";
import python from "../img/python.webp";
import jest from "../img/jest.webp";
import gsap from "../img/gsap.webp";
import redux from "../img/redux.webp";
import git from "../img/git.webp";

import htmlBig from "../img/html5-big.webp";
import cssBig from "../img/css-big.webp";
import jsBig from "../img/JS-big.webp";
import tsBig from "../img/typescript-big.webp";
import reactBig from "../img/react-big.webp";
import sassBig from "../img/sass-big.webp";
import jestBig from "../img/jest-big.webp";
import reduxBig from "../img/redux-big.webp";
import gsapBig from "../img/gsap-big.webp";
import gitBig from "../img/git-big.webp";

// Social Media Image Import
import instaLogo from "../img/instagram-social.webp";
import githubLogo from "../img/github-social.webp";
import linkedinLogo from "../img/linkedin-social.webp";
import twitterLogo from "../img/twitter-social.webp";

// Components Data
export const contentWebDevPortfolio = {};

export const webNavOptions = ["Home", "About", "Skills", "Projects", "Contact"];
export const webNavOptionsLink = ["intro", "services", "skills", "portfolio", "contact"];

export const webIntroSect = {
  socialMedias: [
    {
      link: "https://www.instagram.com/lucsas.l/",
      name: "Lucsas Instagram",
      img: instaLogo,
    },
    {
      link: "http://github.com/lucsasl",
      name: "Lucsas Github",
      img: githubLogo,
    },
    {
      link: "https://www.linkedin.com/in/lucsas/?locale=en_US",
      name: "Lucsas Linkedin",
      img: linkedinLogo,
    },
    {
      link: "https://twitter.com/LucsasL",
      name: "Lucsas Twitter",
      img: twitterLogo,
    },
  ],
  introImg: code,
};

export const webServiceSect = {
  sectTitle: "In what can I help you?",
  servBoxes: [
    {
      title: "Semantics and SEO",
      text: "Structuring a website semantically, respecting the basics of SEO and giving meaning to the components and objects of a website.",
      img: seo,
    },
    {
      title: "Responsive Design",
      text: "Giving shapes and layouts that work in every way, adapting to the sizes and devices that show presence for you everywhere.",
      img: design,
    },
    {
      title: "Dynamic Application",
      text: "Developing websites with an array of different technologies, from technologies that build simple components to others that make complex structures with great architecture.",
      img: webStructure,
    },
  ],
};

export const webAboutSect = {
  sectTitle: "Hi, My name is Lucas Lira",
  aboutText: [
    "I work as a <strong>Front-End Web Developer;</strong> working with interfaces and consuming APIs for websites. My expertise lies in crafting dynamic, visually appealing, and user-friendly web applications. Having gained substantial experience in my abilities, I am now looking to work as a Junior Developer.",
    "Since I began, I've been studying topics in the field of programming for a while now, always looking to improve and get better at delivering what is necessary to enhance my applications. My GitHub shows how much effort I put into really understanding the technologies.",
    "My job and commitment goes to give results, whether this being coding, projecting, or giving ideas.",
    "What do you thing? Can we grow together?",
  ],
};

export const webSkillsSect = {
  sectTitle: "Tech stacks that I've worked with:",
  sectImg: webDev,
  areaDesc:
    "I have honed my skills in HTML, CSS, JavaScript, React JS, GSAP, Redux, and Git.",
  techStack: {
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React JS",
      "SASS",
      "GSAP",
      "Jest",
      "Redux",
      "Python",
      "Git",
    ],
    imgs: [html, css, js, ts, react, sass, gsap, jest, redux, python, git],
    techDesc: [
      "The technology that gives meaning to websites through tags, building the document that you see in the browser.",
      "A combination with the stylesheets of HTML and CSS do the work for static websites, making possible to add layouts, positions, responsiveness and animations.",
      "The technology that make things more interesting and add relevant features to a dynamic experience. With all of it's libraries, frameworks and DOM Manipulation bringing value, making the tech essential for web development.",
      "Great Architecture and organization is what builds React JS, A technology that not only bring all the features of HTML, CSS and JavaScript combined, but enhance it as well, bringing state management, routers, and even more abstraction to your app.",
      "Animation to your website ",
      "Preprocessor of CSS",
      "State Management that makes the structure more put together",
      "An essential tool for project management and version control,",
    ],
  },
};

export const webProjectsSect = {
  sectTitle: "In what did you work?",
  projects: [
    {
      projLink: "https://marknow-lemon.vercel.app/",
      projTitle: "MARKNOW",
      projSubtitle: "A Digital Marketing Agency that brings the success",
      projDesc:
        "MARKNOW is a web project showcasing a digital marketing company that has great numbers and partners. Fully build with React JS and it's technologies. It has several features, such as Hooks, States and Routers. | WORK IN PROGRESS",
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
  ],
};

export const webContactSect = {
  sectTitle: "Want to make your business software real? Let's grow together!",
};

export const ppcNavOptions = [
  "Home",
  "About",
  "Google Ads",
  "Meta Ads",
  "Contact",
];

export const ppcIntroSect = {};

export const ppcServiceSect = {
  sectTitle: "In what can I help you?",
  campaignBox: {
    title: "Campaign Creation",
    text: "Create optimized campaigns to potential clients in different segmentation and locations. Making your business reach new clients in a better way and promoting your branch.",
  },
  copywriteBox: {
    title: "Captivating Writing",
    text: "With good use of Copywriting, we can convince more people and attract impressions, leads and conversions.",
  },
  multiPlatformBox: {
    title: "Multi-Platform",
    text: "Expanding your brand in different social medias and all different places of internet, bringing more sight for you.",
  },
};

export const ppcAboutSect = {
  sectTitle: "Hi, My name is Lucas Lira",
  par1: "I work as a Pay-Per-Click Manager, a professional which main function is to create, manage and optimizing ads campaign in different online advertising softwares, but the most important function, is to bring results for my clients.",
  par2: "I've been studying topics surrounding the fields of Digital Marketing and Programming, always looking to improve and get better in delivering what you need.",
  par3: "My job and commitment goes to give results, whether this being conversions, engagement, leads or even more recognition to your work.",
  par4: "What do you thing? Can we grow together?",
};

export const ppcPlatformSect = {
  googleAds: {
    title: "Google Ads Specialist",
    text: "Meticulously target your audience through the lens of Google Ads, ensuring that every click counts. Your business spotted by the right customer by the right advert. Using Audience Segmentation we can track all the different types of interests and ideas, and use these statistics to bring more potential clients to you.",
  },
  metaAds: {
    title: "Reach beyond the bounds with Meta",
    text: "Elevate your social media presence and connect with your audience on a deeper level through Meta Ads. From Facebook to Instagram, we can implement targeting strategies that resonate with your audience, driving conversions in the social spaces where your customers live, share, and interact.",
  },
};

export const ppcFunctionsSect = {
  sectTitle: "What does a PPC Manager do?",
  par1: "Make you reach any type of person on the internet through ads campaign.",
  par2: "Make your clients pay attention to your products or services on the biggest attention attractor, the internet.",
  par3: "Often reports of the results of your campaigns and the strategies used to make it.",
  par4: "Use strategies and segmentation to appear to the persons that matter the most to you.",
  par5: "Sell the right product, to the right person in the right time, focusing only in the target audience of yours.  ",
};

export const ppcContactSect = {
  sectTitle:
    "Want to bring more attention to your business? Let's grow together!",
};
