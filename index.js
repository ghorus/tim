const n = document.querySelector(".hero_name")
const u = document.getElementById("underline")
n.addEventListener("mouseover",()=>{
    u.classList.add("animate")
})
n.addEventListener("mouseleave",()=>{
    u.classList.remove("animate")
})