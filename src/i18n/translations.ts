export const translations = {
  en: {
    navbar: {
      portfolio: "Portfolio",
      about: "About",
      services: "Services",
      contact: "Contact",
      language: "Language",
    },

    hero: {
      badge: "Creative Studio",
      title: "We create films that move brands.",
      subtitle:
        "Cinematic productions crafted to elevate brands through storytelling, emotion and visual excellence.",
      cta: "View Portfolio",
    },

    about: {
      eyebrow: "About",
      title: "We turn ideas into cinematic experiences.",
      description:
        "Pubird is a creative production studio focused on premium films, commercials and branded content. We combine strategy, storytelling and visual direction to create productions that connect with people and strengthen brands.",
    },

    services: {
      eyebrow: "Services",
      title: "What we do",
      subtitle:
        "Every project is built with creativity, precision and cinematic quality.",

      items: [
        {
          title: "Creative Direction",
          description:
            "Concept development, visual language and storytelling.",
        },
        {
          title: "Film Production",
          description:
            "Commercials, branded content and cinematic productions.",
        },
        {
          title: "Post Production",
          description:
            "Editing, color grading, sound design and finishing.",
        },
        {
          title: "Content Strategy",
          description:
            "Creative campaigns designed for digital platforms and brands.",
        },
      ],
    },

    portfolio: {
      eyebrow: "Portfolio",
      title: "Selected Films",
      subtitle:
        "A curated collection of projects created for brands, businesses and creators.",
      nextProject: "Next Project",
      viewProject: "View Project",
    },

    project: {
      about: "About the Project",
      client: "Client",
      category: "Category",
      year: "Year",
      services: "Services",
      back: "Portfolio",
    },

    footer: {
      title: "Let's create something together.",
      backToTop: "Back to top",
      copyright: "All rights reserved.",
    },
  },

  pt: {
    navbar: {
      portfolio: "Portfólio",
      about: "Sobre",
      services: "Serviços",
      contact: "Contato",
      language: "Idioma",
    },

    hero: {
      badge: "Produtora Criativa",
      title: "Criamos filmes que movem marcas.",
      subtitle:
        "Produções cinematográficas criadas para elevar marcas através de narrativa, emoção e excelência visual.",
      cta: "Ver Portfólio",
    },

    about: {
      eyebrow: "Sobre",
      title: "Transformamos ideias em experiências cinematográficas.",
      description:
        "A Pubird é uma produtora criativa especializada em filmes publicitários, conteúdos para marcas e produções cinematográficas. Unimos estratégia, narrativa e direção visual para criar projetos que conectam pessoas e fortalecem marcas.",
    },
        services: {
      eyebrow: "Serviços",
      title: "O que fazemos",
      subtitle:
        "Cada projeto é desenvolvido com criatividade, precisão e qualidade cinematográfica.",

      items: [
        {
          title: "Direção Criativa",
          description:
            "Desenvolvimento de conceito, linguagem visual e narrativa.",
        },
        {
          title: "Produção Audiovisual",
          description:
            "Filmes publicitários, conteúdos para marcas e produções cinematográficas.",
        },
        {
          title: "Pós-produção",
          description:
            "Edição, color grading, design de som e finalização.",
        },
        {
          title: "Estratégia de Conteúdo",
          description:
            "Campanhas criativas pensadas para marcas e plataformas digitais.",
        },
      ],
    },

    portfolio: {
      eyebrow: "Portfólio",
      title: "Projetos Selecionados",
      subtitle:
        "Uma seleção de filmes produzidos para marcas, empresas e criadores.",
      nextProject: "Próximo Projeto",
      viewProject: "Ver Projeto",
    },

    project: {
      about: "Sobre o Projeto",
      client: "Cliente",
      category: "Categoria",
      year: "Ano",
      services: "Serviços",
      back: "Portfólio",
    },

    footer: {
      title: "Vamos criar algo extraordinário juntos.",
      backToTop: "Voltar ao topo",
      copyright: "Todos os direitos reservados.",
    },
  },
};

export type Language = "en" | "pt";

export type Translation = typeof translations.en;