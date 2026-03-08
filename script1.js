const btnIcon=document.querySelectorAll(".btn")
btnIcon.forEach((btn)=>{
btn.addEventListener("click",()=>{
  window.location.href = "about1.html";
  })
})

const aboutIcon=document.querySelectorAll(".about")
aboutIcon.forEach((about)=>{
about.addEventListener("click",()=>{
  window.location.href = "about2.html";
  })
})




const linkedinIcon=document.querySelector(".linkedin")
linkedinIcon.addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/naveen-negi-423429326/","-blank");
})


const gitHubIcon=document.querySelector(".gitHub")
gitHubIcon.addEventListener("click",()=>{
    window.open("https://github.com/Naveen-Negi721700","-blank");
})


const leetcodeIcon=document.querySelector(".leetcode")
leetcodeIcon.addEventListener("click",()=>{
    window.open("https://leetcode.com/u/neveen_negi_721700/","-blank");
})


const gfgIcon=document.querySelector(".gfg")
gfgIcon.addEventListener("click",()=>{
    window.open("https://www.geeksforgeeks.org/profile/neginspg3?tab=activity","-blank");
})



// for resume
const resumeIcon = document.querySelector(".resume");

resumeIcon.addEventListener("click", () => {
    window.open("NAVEEN NEGI-resume (4).pdf", "-blank");
});

const fileiconIcon = document.querySelector(".fileicon");

fileiconIcon.addEventListener("click", () => {
    window.open("NAVEEN NEGI-resume (4).pdf", "-blank");
});







