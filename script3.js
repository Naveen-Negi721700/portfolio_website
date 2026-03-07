const homeIcon=document.querySelectorAll(".home")
homeIcon.forEach((home)=>{
home.addEventListener("click",()=>{
  window.location.href = "index.html";
  })
})

const btnIcon=document.querySelectorAll(".btn")
btnIcon.forEach((btn)=>{
btn.addEventListener("click",()=>{
  window.location.href = "about1.html";
  })
})

// for resume
const resumeIcon = document.querySelector(".resume");

resumeIcon.addEventListener("click", () => {
    window.open("resume/NAVEEN-NEGI-resume.pdf", "-blank");
});