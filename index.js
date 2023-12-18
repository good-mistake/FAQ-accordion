console.log("jorgenjolop");
const about = document.getElementById("about");
const fee = document.getElementById("fee");
const portfolio = document.getElementById("portfolio");
const help = document.getElementById("help");
const answerForAbout = document.getElementById("answerForAbouts");
const answerForFee = document.getElementById("answerForFee");
const answerForPortfolio = document.getElementById("answerForPortfolio");
const answerForHelp = document.getElementById("answerForHelp");
const svgForAbout = document.getElementById("svgForAbout");
const svgForFee = document.getElementById("svgForFee");
const svgForPortfolio = document.getElementById("svgForPortfolio");
const svgForHelp = document.getElementById("svgForHelp");

const svgs = {
  about: [
    `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>`,
  ],
  others: [
    `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`,
  ],
};
let currentSvg = 0;
const myFunc = (item, display, svg, svgCategory) => {
  item.addEventListener("click", () => {
    display.classList.toggle("display");
    currentSvg = (currentSvg + 1) % svgs[svgCategory].length;
    svg.innerHTML = svgs[svgCategory][currentSvg];
  });
};
myFunc(about, answerForAbout, svgForAbout, "about");
myFunc(fee, answerForFee, svgForFee, "others");
myFunc(portfolio, answerForPortfolio, svgForPortfolio, "others");
myFunc(help, answerForHelp, svgForHelp, "others");
