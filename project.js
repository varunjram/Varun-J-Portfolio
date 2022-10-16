const projectContainer = document.querySelector("#projectContainer");

const projectData = [
  {
    name: "Horoscope App",
    date: "july,2022",
    narrative: "Horoscope app .built with",
    tech: "React JS",
    hostLink: "https://horoscope-reactapp.netlify.app/",
    codeLink: "https://github.com/varunjram/Horoscope-app",
    classLs: "none",
  },
  {git 
    name: "Daily Design Challengs",
    date: "june,2022",
    narrative: "Css pratice repos. built with",
    tech: "HTML , CSS",
    hostLink: "https://8m5i3j.csb.app/",
    codeLink: "https://codesandbox.io/s/daily-design-challenges-8m5i3j",
    classLs: "ls",
  },
  {
    name: "Todo app",
    date: "june,2022",
    narrative: "simple Todo app with filter.built with",
    tech: "React JS",
    hostLink: "https://rysg5e.csb.app/",
    codeLink: "https://codesandbox.io/s/react-todo-app-working-rysg5e?file=/index.js",
    classLs: "none",
  },
  {
    name: "Profit and loss calculator",
    date: "Febrauary,2022",
    narrative: "Calculator for Traders.built with",
    tech: "Vanila JS",
    hostLink: "https://brave-turing-3398.netlify.app/",
    codeLink: "https://github.com/varunjram/Mark-14-Profit---loss",
    classLs: "ls",
  },
  {
    name: "Palindrome Birthday",
    date: "October,2022",
    narrative: "Calculator for Traders.built with",
    tech: "Vanila JS",
    hostLink: "https://brave-turing-3398.netlify.app/",
    codeLink: "https://github.com/varunjram/Mark-14-Profit---loss",
    classLs: "none",
  },
  {
    name: "Do you know triangles?",
    date: "Febrauary,2022",
    narrative: "A quiz app on triangles. built with ",
    tech: "Vanila JS",
    hostLink: "https://traiangles.netlify.app/",
    codeLink: "https://github.com/varunjram/Mark-12-Fun-with-Triangles",
    classLs: "ls",
  },
  {
    name: "Lucky Birthday",
    date: "Febrauary,2022",
    narrative: "a fun app to check weather your birthday is lucky or not built with",
    tech: "Vanila JS",
    hostLink: "https://luckybirthday003.netlify.app/",
    codeLink: "https://github.com/varunjram/Mark-11-Is-your-birthday-lucky",
    classLs: "none",
  },
  {
    name: "Cash Register",
    date: "January, 2022",
    narrative: "Simple cash register to calculate minimun number of notes while giving change. built with",
    tech: "Vanila JS",
    hostLink: "https://hardcore-pare-689db4.netlify.app/",
    codeLink: "https://github.com/varunjram/Mark-10-Cash-Register-app",
    classLs: "ls",
  },
  {
    name: "Incredible india !",
    date: "October, 2022",
    narrative: "A travel recommendation APP built with",
    tech: "React.JS",
    hostLink: "https://sdo5v8.csb.app/",
    codeLink: "https://codesandbox.io/s/recommendation-sdo5v8?file=/src/App.js",
    classLs: "none",
  },
  {
    name: "Bon appetit 🍛",
    date: "January, 2022",
    narrative: "A information app built with",
    tech: "React.JS",
    hostLink: "https://x3r23.csb.app/",
    codeLink: "https://codesandbox.io/s/x3r23?file=/src/App.js",
    classLs: "ls",
  },
  {
    name: "Vulcan Translator",
    date: "October, 2022",
    narrative: "This will translate English to Vulcan(one of the planet in star trek universe). built with",
    tech: "Vanila JS",
    hostLink: "https://tranquil-sopapillas-24431b.netlify.app/",
    codeLink: "https://github.com/varunjram/Vulcan-Translator",
    classLs: "none",
  },
  {
    name: "Whant to speak gibberish",
    date: "January, 2022",
    narrative: "My First Java Script app(psss...Take-2) built with",
    tech: "Vanila JS",
    hostLink: "https://banana-speak-take2.netlify.app/",
    codeLink: "https://github.com/varunjram/neogcamp-bannana-speak",
    classLs: "ls",
  },
  {
    name: "One piece Fan ? ",
    date: "December, 2021",
    narrative: "A CLI app built with",
    tech: "node JS",
    hostLink: "https://replit.com/@VarunJayarama/Mark-01-Assignment-OnePiece?embed=1&output=1#index.js?embed=1&output=1",
    codeLink: "https://github.com/varunjram/Mark---01-Assignment-OnePiece-",
    classLs: "none",
  },
  {
    name: "How well do you know me",
    date: "December, 2021",
    narrative: "A CLI app built with",
    tech: "node JS",
    hostLink: "https://replit.com/@VarunJayarama/Mark-01-Do-You-know-varun-J?embed=1&output=1",
    codeLink: "https://github.com/varunjram/Mark---01---Do-You-know-varun-J",
    classLs: "ls",
  },
];

let renderProjects = projectData.map((project, i) => {
  const {name, date, narrative, tech, hostLink, codeLink, classLs} = project;
  return `<section class="container-center container showcase-list section h1 ${classLs}">
      <div class="container container-center">
        <h1>${name}</h1>
        <small>${date}</small>
        <p>
          ${narrative} <strong>${tech}</strong>
        </p>

        <a 
          style="margin-right: 1rem"
          class="link link-primary"
          href=${hostLink}
          target=_blank>
          Live Project
        </a>

        <a
          class="link link-secondary"
          href=${codeLink}
          target=_blank>
          View code
        </a>
      </div>
    </section>`;
});
projectContainer.innerHTML = renderProjects;
