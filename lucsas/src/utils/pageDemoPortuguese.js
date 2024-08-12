export const techObjPort = {
  content: {
    title: "HTML",
    text: "A tecnologia que dá significado aos websites através de suas tags, construindo o documento que você vê no navegador.",
    textLink: "HTML",
  },
};

export const reducerPort = (state, action) => {
  switch (action.type) {
    case "change_tech_HTML":
      return {
        basicSettings: {
          bg: "white",
          color: "black",
          font: "serif",
        },

        header: {
          headerPadding: "0px",
          headerMargin: "20px",
          headerBoxShadow: "none",
        },

        text: {
          textSize: "1.2em",
          textLine: "1em",
        },

        links: {
          aDecoration: "underline",
          aDisplay: "inline",
          aBg: "none",
          aColor: "blue",
          aPadding: "0px",
          aBorderRadius: "0px",
        },

        content: {
          title: "HTML",
          text: "A tecnologia que dá significado aos websites através de suas tags, construindo o documento que você vê no navegador.",
          textLink: "HTML",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          dateTime: {
            display: "none",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    case "change_tech_CSS":
      return {
        basicSettings: {
          bg: "linear-gradient(to right, #060606, rgba(0, 0, 0, .4))",
          color: "white",
          font: "none",
        },

        header: {
          headerSize: "3.5em",
          headerPadding: "20px",
          headerMargin: "1px 5px",
        },

        text: {
          textSize: "1.3em",
          textLine: "1.8em",
          textWidth: "60%",
          textMargin: "10px 25px",
        },

        links: {
          aDecoration: "none",
          aDisplay: "block",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aWidth: "50%",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "HTML + CSS",
          text: "A combinação entre as tags do HTML e as folhas de estilo CSS fazem o trabalho para sites estáticos, tornando possível a adição de layouts, posições, responsividade e animações.",
          textLink: "CSS",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
          dateTime: {
            display: "none",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    case "change_tech_JavaScript":
      return {
        basicSettings: {
          bg: "linear-gradient(to right, #060606, rgba(0, 0, 0, .4))",
          color: "white",
          font: "none",
        },

        header: {
          headerSize: "3.5em",
          headerPadding: "20px",
          headerMargin: "1px 5px",
        },

        text: {
          textSize: "1.3em",
          textLine: "1.8em",
          textWidth: "60%",
          textMargin: "10px 25px",
        },

        links: {
          aDecoration: "none",
          aDisplay: "block",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aWidth: "50%",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "HTML + CSS + JS",
          text: "A tecnologia que faz as coisas mais interessantes e adiciona atributos relevantes para uma experiência dinâmica. Com toda suas bibliotecas, frameworks e manipulação de DOM dando valor à aplicação, tornando o JavaScript indispensável no desenvolvimento Web.",
          textLink: "JavaScript",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          dateTime: {
            display: "flex",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    case "change_tech_TypeScript":
      return {
        basicSettings: {
          bg: "linear-gradient(to right, #060606, rgba(0, 0, 0, .4))",
          color: "white",
          font: "none",
        },

        header: {
          headerSize: "3.5em",
          headerPadding: "20px",
          headerMargin: "1px 5px",
        },

        text: {
          textSize: "1.3em",
          textLine: "1.8em",
          textWidth: "60%",
          textMargin: "10px 25px",
        },

        links: {
          aDecoration: "none",
          aDisplay: "block",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aWidth: "50%",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "HTML + CSS + TS",
          text: "Programar uma aplicação web com TypeScript é como usar JavaScript com super poderes. Fazendo seu código mais sucinto e organizado, já que adiciona tipos para variáveis e dando completo controle sob seu algoritmo. Dessa forma, a arquitetura da aplicação se torna mais organizada.",
          textLink: "TypeScript",
          link: "https://www.typescriptlang.org/",
          dateTime: {
            display: "flex",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    case "change_tech_React":
      return {
        basicSettings: {
          bg: "linear-gradient(to right, #060606, rgba(0, 0, 0, .4))",
          color: "white",
          font: "none",
        },

        header: {
          headerSize: "3.5em",
          headerPadding: "20px",
          headerMargin: "1px 5px",
        },

        text: {
          textSize: "1.3em",
          textLine: "1.8em",
          textWidth: "60%",
          textMargin: "10px 25px",
        },

        links: {
          aDecoration: "none",
          aDisplay: "block",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aWidth: "50%",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "React JS",
          text: "Ótima arquitetura e organização é o que faz o React JS, uma tecnologia que não apenas traz todos os atributos do HTML, CSS e JavaScript combinados, mas as melhora também, trazendo gerenciamento estados, roteadores, e até mais abstrações para sua aplicação.",
          textLink: "React JS",
          link: "https://react.dev/",
          dateTime: {
            display: "flex",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    case "change_tech_Next":
      return {
        basicSettings: {
          bg: "linear-gradient(to right, #060606, rgba(0, 0, 0, .4))",
          color: "white",
          font: "none",
        },

        header: {
          headerSize: "3.5em",
          headerPadding: "20px",
          headerMargin: "1px 5px",
        },

        text: {
          textSize: "1.3em",
          textLine: "1.8em",
          textWidth: "60%",
          textMargin: "10px 25px",
        },

        links: {
          aDecoration: "none",
          aDisplay: "block",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aWidth: "50%",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "Next.js",
          text: "Um framework que funciona com React para otimização de SEO e aprimorar a aplicação web.",
          textLink: "Next.js",
          link: "https://nextjs.org/",
          dateTime: {
            display: "flex",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    case "change_tech_SASS":
      return {
        basicSettings: {
          bg: "linear-gradient(to right, #060606, rgba(0, 0, 0, .4))",
          color: "white",
          font: "none",
        },

        header: {
          headerSize: "3.5em",
          headerPadding: "20px",
          headerMargin: "1px 5px",
        },

        text: {
          textSize: "1.3em",
          textLine: "1.8em",
          textWidth: "60%",
          textMargin: "10px 25px",
        },

        links: {
          aDecoration: "none",
          aDisplay: "block",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aWidth: "50%",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "SASS",
          text: "Preprocessador de CSS que traz características de programação para as folhas de estilo CSS, com formas diferentes e úteis de escrever estilos, incluindo, mixins, partials e até características de programação como variáveis e estruturas.",
          textLink: "SASS",
          link: "https://sass-lang.com/",
          dateTime: {
            display: "flex",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    case "change_tech_GSAP":
      return {
        basicSettings: {
          bg: "linear-gradient(to right, #060606, rgba(0, 0, 0, .4))",
          color: "white",
          font: "none",
        },

        header: {
          headerSize: "3.5em",
          headerPadding: "20px",
          headerMargin: "1px 5px",
        },

        text: {
          textSize: "1.3em",
          textLine: "1.8em",
          textWidth: "60%",
          textMargin: "10px 25px",
        },

        links: {
          aDecoration: "none",
          aDisplay: "block",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aWidth: "50%",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "GSAP",
          text: "Uma biblioteca JavaScript que faz as animações de seus websites mais gerenciaveis, trazendo incontáveis métodos para animar e controlar cores, posições e gatilhos dos elementos de seu site, adicionando mais ferramentas para criar experiências melhores.",
          textLink: "GSAP",
          link: "https://gsap.com/",
          dateTime: {
            display: "flex",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    case "change_tech_Jest":
      return {
        basicSettings: {
          bg: "linear-gradient(to right, #060606, rgba(0, 0, 0, .4))",
          color: "white",
          font: "none",
        },

        header: {
          headerSize: "3.5em",
          headerPadding: "20px",
          headerMargin: "1px 5px",
        },

        text: {
          textSize: "1.3em",
          textLine: "1.8em",
          textWidth: "60%",
          textMargin: "10px 25px",
        },

        links: {
          aDecoration: "none",
          aDisplay: "block",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aWidth: "50%",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "Jest",
          text: "Testes fáceis para sua aplicação é com Jest, uma ferramenta simples que mostra a saída de suas funções e métodos e prever precisamente o que vai acontecer com algoritmos e disposições.",
          textLink: "Jest",
          link: "https://jestjs.io/",
          dateTime: {
            display: "flex",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    case "change_tech_Redux":
      return {
        basicSettings: {
          bg: "linear-gradient(to right, #060606, rgba(0, 0, 0, .4))",
          color: "white",
          font: "none",
        },

        header: {
          headerSize: "3.5em",
          headerPadding: "20px",
          headerMargin: "1px 5px",
        },

        text: {
          textSize: "1.3em",
          textLine: "1.8em",
          textWidth: "60%",
          textMargin: "10px 25px",
        },

        links: {
          aDecoration: "none",
          aDisplay: "block",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aWidth: "50%",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "Redux",
          text: "Gerenciamento de estados em seu melhor: Redux é uma ferramenta que faz de sua estrutura mas coesiva. Criando stores que se conectam com todos os componentes da aplicação React e salvando todos os slices da sua aplicação.",
          textLink: "Redux",
          link: "https://redux.js.org/",
          dateTime: {
            display: "flex",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    case "change_tech_Python":
      return {
        basicSettings: {
          bg: "linear-gradient(to right, #060606, rgba(0, 0, 0, .4))",
          color: "white",
          font: "none",
        },

        header: {
          headerSize: "3.5em",
          headerPadding: "20px",
          headerMargin: "1px 5px",
        },

        text: {
          textSize: "1.3em",
          textLine: "1.8em",
          textWidth: "60%",
          textMargin: "10px 25px",
        },

        links: {
          aDecoration: "none",
          aDisplay: "block",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aWidth: "50%",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "Python",
          text: "Desenvolvimento Back-end com uma linguagem de programação de alto nível que é utilizada amplamente e eficientemente para processamento de dados e adicionando para a contrução de uma aplicação completa.",
          textLink: "Python",
          link: "https://www.python.org/",
          dateTime: {
            display: "flex",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    case "change_tech_Git":
      return {
        basicSettings: {
          bg: "linear-gradient(to right, #060606, rgba(0, 0, 0, .4))",
          color: "white",
          font: "none",
        },

        header: {
          headerSize: "3.5em",
          headerPadding: "20px",
          headerMargin: "1px 5px",
        },

        text: {
          textSize: "1.3em",
          textLine: "1.8em",
          textWidth: "60%",
          textMargin: "10px 25px",
        },

        links: {
          aDecoration: "none",
          aDisplay: "block",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aWidth: "50%",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "Git",
          text: "Uma ferramenta essencial para controle de versão, que faz o desenvolvimento de aplicações mais seguras. De acordo que uma aplicação cresce, seus pacotes passam a ser maior em quantidade, é aí que o Git entra no desenvolvimento, garantindo o código-fonte já estabelecido no projeto.",
          textLink: "Git",
          link: "https://git-scm.com/",
          dateTime: {
            display: "flex",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    default:
      return state;
  }
};
