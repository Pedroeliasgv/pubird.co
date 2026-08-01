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
      scroll: "Scroll",
    },
    about: {
  eyebrow: "About",
  title: "We turn ideas into cinematic experiences.",
  description:
    "Pubird is a creative production studio focused on premium films, commercials and branded content. We combine strategy, storytelling and visual direction to create productions that connect with people and strengthen brands.",

  tags: [
    "Brand Films",
    "Commercials",
    "Documentary",
    "Automotive",
  ],
},

services: {
  eyebrow: "What We Do",
  title: "We create films with purpose.",
  subtitle:
    "Every project is built with creativity, precision and cinematic quality.",

  items: [
    {
      number: "01",
      title: "Brand Films",
      description:
        "Cinematic films that communicate the essence of a brand through emotion and storytelling.",
    },
    {
      number: "02",
      title: "Commercials",
      description:
        "Creative advertising campaigns designed to capture attention and generate impact.",
    },
    {
      number: "03",
      title: "Documentaries",
      description:
        "Authentic stories told with a cinematic language that creates genuine connection.",
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
  play: "Play",
},
project: {
  about: "About the Project",
  client: "Client",
  category: "Category",
  year: "Year",
  services: "Services",
  back: "Portfolio",
  notFound: "Project not found.",
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
    scroll: "Deslize",
  },

  about: {
    eyebrow: "Sobre",
    title: "Transformamos ideias em experiências cinematográficas.",
    description:
      "A Pubird é uma produtora criativa especializada em filmes publicitários, conteúdos para marcas e produções cinematográficas. Unimos estratégia, narrativa e direção visual para criar projetos que conectam pessoas e fortalecem marcas.",

    tags: [
      "Brand Films",
      "Comerciais",
      "Documentários",
      "Automotivo",
    ],
  },
  services: {
  eyebrow: "O Que Fazemos",
  title: "Criamos filmes com propósito.",
  subtitle:
    "Cada projeto é desenvolvido com criatividade, precisão e qualidade cinematográfica.",

  items: [
    {
      number: "01",
      title: "Brand Films",
      description:
        "Filmes cinematográficos que comunicam a essência de uma marca através da emoção e da narrativa.",
    },
    {
      number: "02",
      title: "Comerciais",
      description:
        "Campanhas publicitárias criativas desenvolvidas para gerar impacto e atrair atenção.",
    },
    {
      number: "03",
      title: "Documentários",
      description:
        "Histórias autênticas contadas com linguagem cinematográfica para criar conexões genuínas.",
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
  play: "Assistir",
},

project: {
  about: "Sobre o Projeto",
  client: "Cliente",
  category: "Categoria",
  year: "Ano",
  services: "Serviços",
  back: "Portfólio",
  notFound: "Projeto não encontrado.",
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