const projectContainer = document.querySelector("#projectContainer");

const projectData = [
  {
    name: " Lucky Birthday",
    date: "Febrauary,2022",
    narrative: "a fun app to check wether your birthday is lucky or not",
    tech: "React.JS",
    hostLink: "https://luckybirthday003.netlify.app/",
    codeLink: "https://github.com/varunjram/Mark-11-Is-your-birthday-lucky",
    classLs: "ls",
  },
  {
    name: "Cash Register",
    date: "January, 2022",
    narrative: "Simple cash register to calculate minimun number of notes while giving change",
    tech: "React.JS",
    hostLink: "https://hardcore-pare-689db4.netlify.app/",
    codeLink: "https://github.com/varunjram/Mark-10-Cash-Register-app",
    classLs: "none",
  },
  {
    name: "Bon appetit 🍛",
    date: "January, 2022",
    narrative: "A information app built with",
    tech: "React.JS",
    hostLink: "https://x3r23.csb.app/",
    codeLink: "https://github.com/varunjram/Bon_Appetit_React_JS",
    classLs: "ls",
  },
  {
    name: " Whant to speak gibberish",
    date: "January, 2022",
    narrative: "My First Java Script app(psss...Take-2)",
    tech: "Vanila JS",
    hostLink: "https://banana-speak-take2.netlify.app/",
    codeLink: "https://github.com/varunjram/neogcamp-bannana-speak",
    classLs: "none",
  },
  {
    name: "One piece Fan ? ",
    date: "December, 2021",
    narrative: "A CLI app built with",
    tech: "node JS",
    hostLink: "https://replit.com/@VarunJayarama/Mark-01-Assignment-OnePiece?embed=1&output=1#index.js?embed=1&output=1",
    codeLink: "https://github.com/varunjram/Mark---01-Assignment-OnePiece-",
    classLs: "ls",
  },
  {
    name: "How well do you know me",
    date: "December, 2021",
    narrative: "A CLI app built with",
    tech: "node JS",
    hostLink: "https://replit.com/@VarunJayarama/Mark-01-Do-You-know-varun-J?embed=1&output=1",
    codeLink: "https://github.com/varunjram/Mark---01---Do-You-know-varun-J",
    classLs: "none",
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
