import React, { useState } from "react";

const pt = {
  navbar: [
    {
      name: "Alcateia", link: "/alcateia",
    },
    {
      name: "Digital Builders", link: "/digital-builders",
    },
    {
      name: "Lobos", link: "/lobos",
    },
    {
      name: "Jornadas", link: "/jornadas",
    },
    {
      name: "Contato", link: "/contato",
    },
  ],
  navbar2: [
    {
      name: "Home", link: "/",
    },
    {
      name: "Alcateia", link: "/alcateia",
    },
    {
      name: "Digital Builders", link: "/digital-builders",
    },
    {
      name: "Lobos", link: "/lobos",
    },
    {
      name: "Jornadas", link: "/jornadas",
    },
    {
      name: "Contato", link: "/contato",
    },
  ],
  h1hero: ["Quando foi a última vez que", "sua empresa fez algo novo?"],
  s1hero: ["Acelerando pessoas, que aceleram negócios.", "Acelerando cultura, que aceleram a economia."],
  btHero: "Saiba mais",
  btAltHero: "Confira nossas soluções",
  banner: "Nós nascemos para transformar",
  h2: ["Modelo de Trabalho", "Creative Pack"],
  ico1: { title: "GESTÃO", desc: "Diagnóstico > Desenho Organizacional > Processos > Resultado" },
  ico2: { title: "TECNOLOGIA", desc: "Criação e gestão de produtos digitais, de forma rápida" },
  ico3: { title: "INOVAÇÃO", desc: "Trilhas de cultura ou intra-empreendedorismo e suporte na criação de marcas significativas" },
  b2: "Saiba Mais",
  h3: ["Temos a solução que", "o seu negócio precisa"],
  card1: { title: "Digital Builders", link: "/digital-builders", know: "Saiba mais", desc: "Times inovadores seguindo metodologias ágeis com endereçamento na resolução de desafios específicos" },
  card2: { title: "Rede Lobos", link: "/lobos", know: "Saiba mais", desc: "Plataforma de talentos e comunidade da Creative Pack, reunindo os melhores profissionais para a criação de produtos digitais", },
  card3: { title: "Jornadas", link: "/jornadas", know: "Saiba mais", desc: "Um passo a passo estruturado de transformação digital para micro e pequenos negócios", },
  h4: [" Empresas que confiam", "na Creative Pack"],
  h5: ["Estamos operando o maior centro", "de inovação do Norte/Nordeste", "Fale agora com nosso", "Time de Inovadores", "Quero inovar agora"],
  b5: "Acessar no mapa",
  f1: "Atalhos do Site",
  f2: "Outras informações",
  f3: "Nossas Redes Sociais",
  f4: "Todos os Direitos Reservados",
  alc: ["Nossa razão", "Não existe força no mundo que faça frente à lobos que", "caçam juntos."],
  alcTxt1: "Nascemos para contribuir na criação de um ambiente de inovação abundante através da geração de resultados reais a partir da real compreensão da nossa realidade enquanto país em desenvolvimento. Somos uma plataforma de inovação com foco em gerar resultados, a partir da conexão entre pessoas, empresas, empreendedores e/ou universidades e/ou centros e institutos de pesquisa.",
  alcTxt2: "Dessa forma, buscamos entender quais os papéis de cada um desses atores e qual é a sua dinâmica, no que se refere ao ambiente inovador, explora conceitos, valores, processos internos, competências e recursos humanos, a fim de minimizar possíveis falhas prejudiciais à performance de um negócio.",
  alcMission: { title: "Nossa missão", desc: "Criar novos negócios e soluções inovadoras através de processo de transformação digital aplicados para cortar custos, aumentar desempenho e produtividade das empresas enquanto geramos oportunidades de mercado para empreendedores e comunidades inovadoras." },
  alcVision: { title: "Nossa Visão", desc: "Contribuir para a real melhora da economia de países em desenvolvimento através da diminuição da desigualdade de oportunidades." },
  alcStart: ["Comece seu processo de transformação agora mesmo", "Quero inovar agora"],
  wolf1: ["Lobos", "Nossa comunidade de Talentos"],
  wolf2: ["Uma plataforma gratuita para acelerar o", "seu crescimento profissional"],
  wolf3: ["Mais de 00 profissionais envolvidos", "00 empresas com projetos abertos", "Mais de 00 vagas de emprego", "Conheça profissionais da rede"],
  wolf4: ["Programa de Descontos", "Comunidades Parceiras"],
  wolf5: ["Faça parte dessa comunidade", "de Talentos do Brasil", "Quero fazer parte"],
  jrny: ["Jornadas", "Um passo a passo estruturado de transformação digital", "para Micro e Pequenos Negócios"],
  jrny1: "TRILHE A SUA PRÓPRIA JORNADA",
  jrny2: "Entenda como funciona a sua jornada:",
  j1: "O Empreendedor apresenta seus problemas e escolhe uma trilha de solução",
  j2: "Você aprende como superar seus desafios com conteúdos ministrados por especialistas de negócios",
  j3: "O time Creative Pack realiza o acompanhamento do seu negócio",
  j4: "Finalizamos com uma mentoria personalizada para o seu problema",
  j5: "Agora você faz parte do nosso banco de negócios, podendo participar de eventos, aulas, workshops com outros empreendedores",
  jrny5: "Conheça nossos mentores:",
  jrny6: ["Agende uma sessão ", "agora mesmo", "Quero agendar"],
  cnt: ["Vamos tomar um café", "Entre em Contato"],
  cnt1: ["Entrar em contato com equipe", "Enviar mensagem", "https://api.whatsapp.com/send?phone=5598991504939&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20creative%20pack"],
  cnt2: ["contato@creativepack.org", "Enviar email agora", "mailto:contato@creativepack.org"],
  cnt3: ["Av. Daniel de la Touche, 1502, São Luís - MA", "Ir para endereço", "https://goo.gl/maps/dDULgLe27XgTPKGr9"],
  db: {
    h1: "DIGITAL BUILDERS",
    h2: "Construa Times Inovadores",
    h3: "Times inovadores seguindo metodologias ágeis com endereçamento na resolução de desafios específicos",
    cta: "Saiba Mais",
    icons: [
      { title: "CONCEPT BUILDERS", desc: "Times focados na descoberta do real problema a ser trabalho de acordo com as dores sofridas pelos futuros usuários" },
      { title: "PRODUCT BUILDERS", desc: "Time focado na construção de um produto mínimo viável (mvp) de média fidelidade objetivando de sanar a dor descoberta" },
      { title: "BUSINESS BUILDERS", desc: "Time focado na construção de uma operação e modelo de negócios a partir da relação contínua com o mercado" },
    ]
  },
}

const en = {
  navbar: [
    {
      name: "Alcateia", link: "/alcateia",
    },
    {
      name: "Digital Builders", link: "/digital-builders",
    },
    {
      name: "Lobos", link: "/lobos",
    },
    {
      name: "Jornadas", link: "/jornadas",
    },
    {
      name: "Contact", link: "/contato",
    },
  ],
  navbar2: [
    {
      name: "Home", link: "/",
    },
    {
      name: "Alcateia", link: "/alcateia",
    },
    {
      name: "Digital Builders", link: "/digital-builders",
    },
    {
      name: "Lobos", link: "/lobos",
    },
    {
      name: "Jornadas", link: "/jornadas",
    },
    {
      name: "Contact", link: "/contato",
    },
  ],
  h1hero: ["When was the last time your", "company done something new?"],
  s1hero: ["Accelerating people, accelerating business.", "Accelerating culture, accelerating the economy."],
  btHero: "Know more",
  btAltHero: "Check out our solutions",
  banner: "We were born to transform",
  h2: ["Work Model", "Creative Pack"],
  ico1: { title: "MANAGEMENT", desc: "Diagnosis > Organizational Design > Processes > Result" },
  ico2: { title: "TECHNOLOGY", desc: "Creating and managing digital products quickly" },
  ico3: { title: "INNOVATION", desc: "Cultural or intra-entrepreneurial trails and support in the creation of significant brands" },
  b2: "Know More",
  h3: ["We have the solution that", "your business needs"],
  card1: { title: "Digital Builders", link: "/digital-builders", know: "Know More", desc: "Innovative teams following agile methodologies addressing specific challenges" },
  card2: { title: "Lobos Network", link: "/lobos", know: "Know More", desc: "Creative Pack's talent and community platform, bringing together the best professionals to create digital products", },
  card3: { title: "Jornadas", link: "/jornadas", know: "Know More", desc: "A structured step-by-step digital transformation for micro and small businesses", },
  h4: ["Companies that trust", "in Creative Pack"],
  h5: ["We are operating the largest center", "North/Northeast innovation", "Talk now to our", "Innovators Team", "I want to innovate now"],
  b5: "Access on map",
  f1: "Site shortcuts",
  f2: "Other information",
  f3: "Our Social Networks",
  f4: "All rights reserved",
  alc: ["Our reason", "There is no force in the world that can stand up to the wolves that", "hunt together."],
  alcTxt1: "We were born to contribute to the creation of an environment of abundant innovation by generating real results based on a real understanding of our reality as a developing country. We are an innovation platform focused on generating results, from the connection between people, companies, entrepreneurs and/or universities and/or research centers and institutes.",
  alcTxt2: "Thus, we seek to understand the roles of each of these actors and their dynamics, with regard to the innovative environment, explores concepts, values, internal processes, skills and human resources, in order to minimize possible failures harmful to performance of a business.",
  alcMission: { title: "Our Mission", desc: "Create new businesses and innovative solutions through a digital transformation process applied to cut costs, increase companies' performance and productivity while generating market opportunities for entrepreneurs and innovative communities." },
  alcVision: { title: "Our Vision", desc: "Contribute to real improvement in the economy of developing countries by reducing inequality of opportunities." },
  alcStart: ["Start your transformation process right now", "I want to innovate now"],
  wolf1: ["Lobos", "Our Talent Community"],
  wolf2: ["A free platform to accelerate", "your professional growth"],
  wolf3: ["More than 00 professionals involved", "00 companies with open projects", "More than 00 job vacancies", "Meet network professionals"],
  wolf4: ["Discount Program", "Partner Communities"],
  wolf5: ["Be part of this community", "of Talents of Brazil", "I want to be part"],
  jrny: ["Jornadas", "A structured step-by-step digital transformation", "for Micro and Small Businesses"],
  jrny1: "TRACK YOUR OWN JOURNEY",
  jrny2: "Understand how your journey works:",
  j1: "The Entrepreneur presents his problems and chooses a solution path",
  j2: "You learn how to overcome your challenges with content taught by business experts",
  j3: "The Creative Pack team monitors your business",
  j4: "We end with a personalized mentoring for your problem",
  j5: "You are now part of our business bank, being able to participate in events, classes, workshops with other entrepreneurs",
  jrny5: "Meet our mentors:",
  jrny6: ["Schedule a session ", "right now", "I want to schedule"],
  cnt: ["Let's have a coffee", "Contact Us"],
  cnt1: ["Get in touch with team", "Send Message", "https://api.whatsapp.com/send?phone=5598991504939&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20creative%20pack"],
  cnt2: ["contato@creativepack.org", "Send email now", "mailto:contato@creativepack.org"],
  cnt3: ["Av. Daniel de la Touche, 1502, São Luís - MA", "Go to address", "https://goo.gl/maps/dDULgLe27XgTPKGr9"],
  db: {
    h1: "DIGITAL BUILDERS",
    h2: "Build Innovative Teams",
    h3: "Innovative teams following agile methodologies addressing specific challenges",
    cta: "Know More",
    icons: [
      { title: "CONCEPT BUILDERS", desc: "Teams focused on discovering the real problem to be work according to the pain suffered by future users" },
      { title: "PRODUCT BUILDERS", desc: "Team focused on building a minimum viable product (mvp) of medium fidelity in order to remedy the pain discovered" },
      { title: "BUSINESS BUILDERS", desc: "Team focused on building an operation and business model based on continuous relationship with the market" },
    ]
  }
}

export const DataContext = React.createContext();

export function DataProvider({ children }) {

  const [lang, setLang] = useState(pt)

  return (
    <DataContext.Provider value={{ lang: lang, setLang, pt: pt, en: en }}>
      {children}
    </DataContext.Provider>
  );
}
