// Image Import
import code from "../img/codeIntro.png";
import lucsas from "../img/Lucsas.webp";
import webDev from "../img/webDev.webp";

import marknow from "../img/marknow-proj.png";
import everyshop from "../img/everyshop-proj.png";
import bNumerical from "../img/B-numerical.webp";

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
import pythonBig from "../img/python-big.webp";
import jestBig from "../img/jest-big.webp";
import reduxBig from "../img/redux-big.webp";
import gsapBig from "../img/gsap-big.webp";
import gitBig from "../img/git-big.webp";

// Social Media Image Import
import instaLogo from "../img/instagram-social.webp";
import githubLogo from "../img/github-social.webp";
import linkedinLogo from "../img/linkedin-social.webp";
import gitlabLogo from "../img/gitlab-social.webp";

// Components Data
export const contentWebDevPortfolio = {};

export const webNavOptionsPort = ["Home", "Sobre", "Habilidades", "Projetos", "Contato"];

export const webIntroSectPort = {
  infoPort: {
    h1Span1: "Salve, eu sou",
    h2: "Desenvolvedor Web",
    text: "Eu crio e otimizo websites with React e JavaScript, entregando o melhor para fazer software bons que resolvem problemas reais.",
    downloadButt: "Baixar Currículo",
  },
  introImg: code,
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
  ],
};

export const webServiceSectPort = {
  sectTitlePort: "Em que posso ajudar?",
  servBoxesPort: [
    {
      title: "Semântica e SEO",
      text: "Estruturar um website semanticamente, respeitando os conceitos básicos de SEO e dando significado aos componentes e objetos de um site.",
      img: seo,
    },
    {
      title: "Design Responsivo",
      text: "Dando formas e layouts que funcionam de qualquer maneira e aplicando mídias que funcionam respeitando performance, de modo em que seu site se adapte aos dispositivos automaticamente.",
      img: design,
    },
    {
      title: "Aplicações Dinâmicas",
      text: "Desenvolvendo com uma imensa variedade de tecnologias, usando desde de tecnologias que constroem componentes simples até outras que fazem estruturas complexas.",
      img: webStructure,
    },
  ],
};

export const webAboutSectPort = {
  sectTitlePort: "Eae, me chamo ",
  aboutTextPort: [
    "Eu trabalho como um Desenvolvedor Web Front-End; trabalhando com interfaces e consumindo APIs para websites. Minha expertise se baseia em criar aplicações web dinâmicos, versáteis e visualmente agradáveis.",
    "Desde que comecei, Estive estudando tópicos e tecnologias da computação, sempre buscando melhorar e entregar o que é necessário para desenvolver uma aplicação aprimorada.",
    "Meu trabalho e compromisso vai para dar resultados, independente da forma, sendo isso escrevendo código, projetando ou dando ideias.",
    "O que você acha? Podemos crescer juntos?",
  ],
  aboutImg: lucsas,
};

export const webSkillsSectPort = {
  sectTitlePort: "Conjunto de Tecnologias que eu já usei:",
  sectImg: webDev,
  areaDescPort:
    "Eu estive pondo dedicação em desenvolver minhas habilidades em HTML, CSS, JavaScript, React JS, GSAP, Redux, e Git. No momento, sou um desenvolvedor focado em Frontend.",
  techStackPort: {
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
    techDescPort: [
      "A tecnologia que dá significado aos websites através de suas tags, construindo o documento que você vê no navegador.",
      "A combinação entre as tags do HTML e as folhas de estilo CSS fazem o trabalho para sites estáticos, tornando possível a adição de layouts, posições, responsividade e animações.",
      "A tecnologia que faz as coisas mais interessantes e adiciona atributos relevantes para uma experiência dinâmica. Com toda suas bibliotecas, frameworks e manipulação de DOM dando valor à aplicação, tornando o JavaScript indispensável no desenvolvimento Web.",
      "Ótima arquitetura e organização é o que faz o React JS, uma tecnologia que não apenas traz todos os atributos do HTML, CSS e JavaScript combinados, mas as melhora também, trazendo gerenciamento estados, roteadores, e até mais abstrações para sua aplicação.",
      "Animações para seu website",
      "Pré-processador de CSS",
      "Gerenciamento de estados que fazem as estruturas mais organizadas",
      "Uma ferramenta essencial para gerenciamento de projetos e controle de versão,",
    ],
  },
  laptopNavPort: ["Primavera", "Verão", "Outono", "Inverno"],
};

export const webProjectsSectPort = {
  sectTitlePort: "Em que projetos você já trabalhou?",
  projectsPort: [
    {
      projLinkPort: "https://marknow-lemon.vercel.app/",
      projTitlePort: "MARKNOW",
      projSubtitlePort: "Uma Agência de Marketing que traz sucesso",
      projDescPort:
        "MARKNOW é um projeto web apresentando uma empresa de marketing digital que tem grandes feitos e parceiros. Cosntruído com base em React JS e suas tecnologias. Tendo inúmeras características, como Hooks, Estados e Roteadores. | TRABALHO EM PROGRESSO",
      projImgDescPort: "Imagem do projeto MARKNOW",
      techStackPort: [
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
      techStackImgPort: [
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
      projImgPort: marknow,
    },
    {
      projLinkPort: "https://every-shop.vercel.app/",
      projTitlePort: "Everyshop",
      projSubtitlePort: "Uma loja que vende de tudo",
      projDescPort:
        "EVERYSHOP é um projeto web de uma loja que vende de tudo. Desenvolvido em React JS incluindo SASS e design responsivo. | TRABALHO EM PROGRESSO",
      projImgDescPort: "Imagem do projeto EVERYSHOP",
      techStackPort: [
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
      techStackImgPort: [
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
      projImgPort: everyshop,
    },
    {
      projLinkPort: "https://every-shop.vercel.app/",
      projTitlePort: "B-Numerical",
      projSubtitlePort: "Um conversor de bases numéricas",
      projDescPort:
        " | TRABALHO EM PROGRESSO",
      projImgDescPort: "Imagem do projeto B-Numerical",
      techStackPort: [
        "Pyhton",
      ],
      techStackImgPort: [
        pythonBig,
      ],
      projImgPort: bNumerical,
    },
    {
      projLinkPort: "#",
      projTitlePort: "Nosso Sistema Solar",
      projSubtitlePort: "Um ambiente 3D que mostra nosso sistema solar",
      projDescPort:
        " | TRABALHO EM PROGRESSO",
      projImgDescPort: "Imagem do projeto EVERYSHOP",
      techStackPort: [
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
      techStackImgPort: [
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
      projImgPort: everyshop,
    },
  ],
};