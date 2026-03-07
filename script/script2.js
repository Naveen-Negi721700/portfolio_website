const homeIcon=document.querySelectorAll(".home")
homeIcon.forEach((home)=>{
home.addEventListener("click",()=>{
  window.location.href = "index.html";
  })
})

const aboutIcon=document.querySelectorAll(".about")
aboutIcon.forEach((about)=>{
about.addEventListener("click",()=>{
  window.location.href = "about2.html";
  })
})

const card1Icon=document.querySelector(".card1")
card1Icon.addEventListener("click",()=>{
    window.open("https://naveen-negi721700.github.io/Music_Web_Player/","-blank");
})

const card2Icon=document.querySelector(".card2")
card2Icon.addEventListener("click",()=>{
    window.open("https://naveen-negi721700.github.io/Kanban-board/","-blank");
})

const card3Icon=document.querySelector(".card3")
card3Icon.addEventListener("click",()=>{
    window.open("https://naveen-negi721700.github.io/x.com/","-blank");
})


const card4Icon=document.querySelector(".card4")
card4Icon.addEventListener("click",()=>{
    window.open("https://github.com/Naveen-Negi721700/sudoku-solver","-blank");
})
const card5Icon=document.querySelector(".card5")
card5Icon.addEventListener("click",()=>{
    window.open("https://naveen-negi721700.github.io/portfolio_website/","-blank");
})
const card6Icon=document.querySelector(".card6")
card6Icon.addEventListener("click",()=>{
    window.open("https://naveen-negi721700.github.io/netflix_clone/","-blank");
})

// for resume
const resumeIcon=document.querySelector(".resume")
resumeIcon.addEventListener("click",()=>{
    window.open("../resume/NAVEEN NEGI-resume (4).pdf","-blank");
})