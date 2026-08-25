// Data from imports.ts
const fullstackLanguages = [
  { name: "React.JS", iconPath: "assets/react-icon.svg", color: "#157AFB" },
  { name: "CSS", iconPath: "assets/css-icon.svg", color: "#1572B6" },
  { name: "Node.JS", iconPath: "assets/node-icon.svg", color: "#3DA92E" },
  { name: "Express.JS", iconPath: "assets/express-icon.svg", color: "#000000" },
  { name: "MongoDB", iconPath: "assets/mongo-icon.svg", color: "#439934" },
  { name: "Figma", iconPath: "assets/figma-icon.svg", color: "#F24E1E" }
];

const fullstackLanguagesWithNextjs = [
    { name: "Next.JS", iconPath: "assets/next-icon.svg", color: "#000000" },
  { name: "CSS", iconPath: "assets/css-icon.svg", color: "#1572B6" },
  { name: "Node.JS", iconPath: "assets/node-icon.svg", color: "#3DA92E" },
  { name: "Express.JS", iconPath: "assets/express-icon.svg", color: "#000000" },
  {name : "Firebase", iconPath : "assets/firebase-icon.svg", color: "#ffca28"},
  { name: "Figma", iconPath: "assets/figma-icon.svg", color: "#F24E1E" },
];

const vanillaLanguages = [
  { name: "HTML", iconPath: "assets/html-icon.svg", color: "#E75326" },
  { name: "CSS", iconPath: "assets/css-icon.svg", color: "#1572B6" },
  { name: "JavaScript", iconPath: "assets/js-icon.svg", color: "#D2B911" },
  { name: "Figma", iconPath: "assets/figma-icon.svg", color: "#F24E1E" }
];

const allProjects = [
  {
    projectImage: "assets/mobile-benchmarks.webp",
    projectTitle: "Mobile Benchmarks : Discover Games That Run Perfectly on Your Phone ",
    projectDescription: "Mobile benchmarks is a web application that helps you compare and discover mobile games that perform well on your device. Mobile Benchmarks gives you tailored benchmarks, real-user results, and game-specific performance insights",
    liveSiteLink: "https://mobile-benchmarks.vercel.app/",
    languagesArray: fullstackLanguages
  },
  {
    projectImage: "assets/zeni.webp",
    projectTitle: "Zeni : A New Way to Track Your Expenses",
    projectDescription: "Zeni is an intelligent web application that helps you track expenses, create budgets, and gain valuable insights into your spending habits using natural language. By simply typing your daily transactions, Zeni automatically categorizes them and provides visual breakdowns, helping you take full control of your personal finances with minimal effort.",
    githubLink: "https://github.com/Daviddix/zeni",
    liveSiteLink: "https://zeni-psi.vercel.app",
    languagesArray: fullstackLanguagesWithNextjs
  },
  {
    projectImage: "assets/reveal.webp",
    projectTitle: "Reveal : Understand Privacy Policies Instantly",
    projectDescription: "Reveal is a Chrome extension designed to help you understand privacy policies using AI, offering simplified summaries and easy-to-read insights. With Reveal, you can instantly extract and simplify any privacy policy, save it for later, and ensure you’re always in the know about how your data is handled.",
    githubLink: "https://github.com/Daviddix/Reveal---Easy-to-understand-privacy-policies",
    liveSiteLink: "https://chromewebstore.google.com/detail/reveal-instantly-understa/doapfofebjnljdcdpkknadbnojikkokp",
    languagesArray: vanillaLanguages
  },
  {
    projectImage: "assets/ruta.webp",
    projectTitle: "Ruta : Your Guide to Learning fast with AI",
    projectDescription: "Ruta is a web application that leverages the power of AI to create personalized learning paths. Tell Ruta what you want to learn and Ruta generates a customized roadmap to help you achieve your learning objectives efficiently and effectively.",
    githubLink: "https://github.com/Daviddix/ruta",
    liveSiteLink: "https://ruta-one.vercel.app",
    languagesArray: vanillaLanguages
  }
];

// Header logic
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Mobile menu logic
const mobileNav = document.getElementById("mobile-nav");
const menuBtn = document.getElementById("menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.add("show");
});

closeMenuBtn.addEventListener("click", () => {
  mobileNav.classList.remove("show");
});

const navLinks = mobileNav.querySelectorAll("a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("show");
  });
});

// Projects rendering
const projectsContainer = document.getElementById("projects-container");

const renderProjects = () => {
  allProjects.forEach((project, index) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");

    let chipsHtml = "";
    project.languagesArray.forEach(lang => {
      chipsHtml += `
        <div class="stack-chip" style="border: 1px solid ${lang.color}77;">
          <img src="${lang.iconPath}" alt="${lang.name}" width="24" height="24" />
          <p class="${lang.name === 'Figma' ? 'italic' : ''}">${lang.name}</p>
        </div>
      `;
    });

    let buttonsHtml = "";
    if (project.githubLink) {
      buttonsHtml += `
        <a target="_blank" href="${project.githubLink}">
          <button class="sub-btn">
            <img src="assets/github-icon.svg" alt="GitHub icon" aria-hidden="true" width="16" height="16" /> Source Code
          </button>
        </a>
      `;
    }
    buttonsHtml += `
      <a target="_blank" href="${project.liveSiteLink}">
        <button class="primary-btn">
          <img src="assets/live-site-icon.svg" alt="Live site icon" aria-hidden="true" width="16" height="16" /> Live Site 
        </button>
      </a>
    `;

    projectElement.innerHTML = `
      <img ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} src="${project.projectImage}" alt="${project.projectTitle} preview" class="project-image" width="1600" height="900" />
      <h3 class="project-title">${project.projectTitle}</h3>
      <div class="stack-chips-container">
        ${chipsHtml}
      </div>
      <p class="project-description">${project.projectDescription}</p>
      <div class="buttons-container">
        ${buttonsHtml}
      </div>
    `;

    projectsContainer.appendChild(projectElement);
  });
};

renderProjects();

// Automatically update copyright year
const currentYearElement = document.getElementById("current-year");
if (currentYearElement) {
  currentYearElement.innerText = new Date().getFullYear();
}
