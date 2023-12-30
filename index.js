const n = document.querySelector(".hero_name")
const u = document.getElementById("underline")
const i = document.querySelector(".hero_img")
n.addEventListener("mouseover",()=>{
    u.style.strokeDashoffset = 0
    i.style.opacity = "1"
    ti.src = "tim3.jpg"})
n.addEventListener("mouseleave",()=>{
    u.style.strokeDashoffset = 300
    i.style.opacity = "0"})

//portfolio
const port_imgs = document.getElementsByClassName("port_img")
const port_img_conts = document.getElementsByClassName("port_img_cont")
Array.from(port_img_conts).forEach((thing) => {
    thing.addEventListener("click",()=>{
        console.log(thing.firstChild.className);
        if(thing.firstChild.className=="port_img comm1"){
           var modal =  document.createElement("div")
           const body = document.querySelector("body")
           modal.style.position
           body
        }
    })
}
);
const port_cats = document.getElementsByClassName("port_work_cat")
Array.from(port_cats).forEach((thing) => 
    thing.addEventListener("click",()=>{
        //bold cat
        Array.from(port_cats).forEach((t)=>{
            if (thing.id==t.id){t.style.fontWeight="bold"}
            else{t.style.fontWeight="400"}
        })

        //show imgs
        Array.from(port_imgs).forEach((w) => {
            if(thing.id==w.id){
                thing.style.fontWeight="bold"
                w.style.display="inline"
            }
            else if(thing.id=="all"){
                w.style.display="inline";
            }
            else{
                w.style.display="none"
            }
        }
            );
    })
    
);

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
    c.style.strokeDashoffset = 0;
    ti.src = "tim2.jpg"
    i.style.opacity = "1"})
t.addEventListener("mouseleave",()=>{
    c.style.strokeDashoffset =312;
    i.style.opacity = "0"})
t2.addEventListener("mouseover",()=>{
    c2.style.strokeDashoffset = 0;
    ti.src = "tim1.jpg"
    i.style.opacity = "1"})
t2.addEventListener("mouseleave",()=>{
    c2.style.strokeDashoffset =446;
    i.style.opacity = "0"})
t3.addEventListener("mouseover",()=>{
    c3.style.strokeDashoffset = 0;
    ti.src = "tim4.jpg"
    i.style.opacity = "1"})
t3.addEventListener("mouseleave",()=>{
    c3.style.strokeDashoffset =312
    i.style.opacity = "0"})

//hover
const desc = document.querySelector(".desc")
function begone(){desc.style.display = "none"}
function getPos(e){
    x=e.clientX;
    y=window.pageYOffset;
    yy=e.clientY;
    desc.innerHTML = "@KairosVisuals"
    desc.style.display = "block"
    desc.style.top=(y + yy - 50) + "px"
    desc.style.left=(x-20) + "px"}
function getPos2(e){
    x=e.clientX;
    y=window.pageYOffset;
    yy=e.clientY;
    desc.innerHTML="@tim_ngantung"
    // @_kairosvisuals, 
    desc.style.display = "block"
    desc.style.top=(y + yy - 50) + "px"
    desc.style.left=(x-20) + "px"}
function getPos3(e){
    x=e.clientX;
    y=window.pageYOffset;
    yy=e.clientY;
    desc.innerHTML="@timngantung"
    desc.style.display = "block"
    desc.style.top=(y + yy - 50) + "px"
    desc.style.left=(x-20) + "px"}
function getPos4(e){
    x=e.clientX;
    y=window.pageYOffset;
    yy=e.clientY;
    desc.innerHTML="@kairosvisuals"
    desc.style.display = "block"
    desc.style.top=(y + yy - 50) + "px"
    desc.style.left=(x-20) + "px"}

//job perks
const growth = document.querySelector(".growth")
const u1 = document.querySelector("#u1")
const engage = document.querySelector(".engage")
const u2 = document.querySelector("#u2")
const vid = document.querySelector(".vid")
const u3 = document.querySelector("#u3")
const photo = document.querySelector(".photo")
const u4 = document.querySelector("#u4")
const media = document.querySelector(".media")
const u5 = document.querySelector("#u5")
const impact = document.querySelector(".impact")
const u6 = document.querySelector("#u6")
growth.addEventListener("mouseover",()=>{
    u1.style.strokeDashoffset = 0})
growth.addEventListener("mouseleave",()=>{
    u1.style.strokeDashoffset =315})
engage.addEventListener("mouseover",()=>{
    u2.style.strokeDashoffset = 0})
engage.addEventListener("mouseleave",()=>{
    u2.style.strokeDashoffset =315})
vid.addEventListener("mouseover",()=>{
    u3.style.strokeDashoffset = 0})
vid.addEventListener("mouseleave",()=>{
    u3.style.strokeDashoffset =315})
photo.addEventListener("mouseover",()=>{
    u4.style.strokeDashoffset = 0})
photo.addEventListener("mouseleave",()=>{
    u4.style.strokeDashoffset =315})
media.addEventListener("mouseover",()=>{
    u5.style.strokeDashoffset = 0})
media.addEventListener("mouseleave",()=>{
    u5.style.strokeDashoffset =315})
impact.addEventListener("mouseover",()=>{
    u6.style.strokeDashoffset = 0})
impact.addEventListener("mouseleave",()=>{
    u6.style.strokeDashoffset =315})
