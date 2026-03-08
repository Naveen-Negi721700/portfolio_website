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

const contactIcon=document.querySelectorAll(".btncontact")
contactIcon.forEach((btncontact)=>{
btncontact.addEventListener("click",()=>{
  window.location.href = "contact.html";
  })
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


