const n = document.querySelector(".hero_name")
const u = document.getElementById("underline")
const i = document.querySelector(".hero_img")
n.addEventListener("mouseover",()=>{
    u.style.strokeDashoffset = 0
    i.style.opacity = "1"
    ti.src = "tim3.jpg"
    // console.log(c.getTotalLength())
})
n.addEventListener("mouseleave",()=>{
    u.style.strokeDashoffset = 300
    i.style.opacity = "0"
})

//hero name
const hn = document.querySelector(".hero_name")

//jobs
const t = document.querySelector(".t_1")
const t2 = document.querySelector(".t_2")
const t3 = document.querySelector(".t_3")
const c = document.querySelector(".c_1")
const c2 = document.querySelector(".c_2")
const c3 = document.querySelector(".c_3")
const ti = document.querySelector(".tim_img")
t.addEventListener("mouseover",()=>{
    c.style.strokeDashoffset = 0
    ti.src = "tim2.jpg"
    i.style.opacity = "1"
})
t.addEventListener("mouseleave",()=>{
    c.style.strokeDashoffset =312
    i.style.opacity = "0"
})
t2.addEventListener("mouseover",()=>{
    c2.style.strokeDashoffset = 0
    ti.src = "tim1.jpg"
    i.style.opacity = "1"
})
t2.addEventListener("mouseleave",()=>{
    c2.style.strokeDashoffset =446
    i.style.opacity = "0"
})
t3.addEventListener("mouseover",()=>{
    c3.style.strokeDashoffset = 0
    ti.src = "tim.jpg"
    i.style.opacity = "1"
})
t3.addEventListener("mouseleave",()=>{
    c3.style.strokeDashoffset =312
    i.style.opacity = "0"
})


