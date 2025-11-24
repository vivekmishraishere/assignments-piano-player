let  a = document.querySelector("#keyA");
let  s = document.querySelector("#keyS");
let  d = document.querySelector("#keyD");
let  f = document.querySelector("#keyF");
let  g = document.querySelector("#keyG");
let  h = document.querySelector("#keyH");
let  j = document.querySelector("#keyJ");
let  k = document.querySelector("#keyK");
let  l = document.querySelector("#keyL");
let semiColon = document.querySelector("#keySem");




let body = document.querySelector("body");

body.addEventListener("keydown", function(dets){
    
   if(dets.key === "a" ) {
    a.classList.add("active");
    let audioA = new Audio("audio/0.mp3");
    audioA.play();
   }

   else if(dets.key === "s") {
    s.classList.add("active");
    let audioS = new Audio("audio/1.mp3");
    audioS.play();
    
   }

   else if(dets.key === "d") {
    d.classList.add("active");
    let audioD = new Audio("audio/2.mp3");
    audioD.play();
   }

   else if(dets.key === "f") {
    f.classList.add("active");
    let audioF = new Audio("audio/3.mp3");
    audioF.play();
   }

   else if(dets.key === "g") {
    g.classList.add("active");
    let audioG = new Audio("audio/4.mp3");
    audioG.play();
   }

   else if(dets.key === "h") {
    h.classList.add("active");
    let audioH = new Audio("audio/5.mp3");  
    audioH.play();
   }

   else if(dets.key === "j") {
    j.classList.add("active");
    let audioJ = new Audio("audio/6.mp3");
    audioJ.play();
   }

   else if(dets.key === "k") {
    k.classList.add("active");
    let audioK = new Audio("audio/7.mp3");
    audioK.play();
   }

   else if(dets.key === "l") {
    l.classList.add("active");
    let audioL = new Audio("audio/8.mp3");
    audioL.play();
   }

   else if(dets.key === ";") {
    semiColon.classList.add("active");
    let audioSemi = new Audio("audio/9.mp3");
    audioSemi.play();
   }

})

body.addEventListener("keyup", function(dets){
    
   if(dets.key === "a") {
    a.classList.remove("active");
   }

   else if(dets.key === "s") {
    s.classList.remove("active");
   }

    else if(dets.key === "d") {
    d.classList.remove("active");
   }

   else if(dets.key === "f") {
    f.classList.remove("active");
   }

   else if(dets.key === "g") {
    g.classList.remove("active");
   }

   else if(dets.key === "h") {
    h.classList.remove("active");
   }

   else if(dets.key === "j") {
    j.classList.remove("active");
   }

   else if(dets.key === "k") {
    k.classList.remove("active");
   }

   else if(dets.key === "l") {
    l.classList.remove("active");
   }

   else if(dets.key === ";") {
    semiColon.classList.remove("active");
   }    
   
})



body.addEventListener("click", function(dets){
   if(dets.target.id === "keyA" ) {
    let audioA = new Audio("audio/0.mp3");
    audioA.play();
   }

   else if(dets.target.id === "keyS") {
    let audioS = new Audio("audio/1.mp3");
    audioS.play();
   }

    else if(dets.target.id === "keyD") {
    let audioD = new Audio("audio/2.mp3");
    audioD.play();
   }
   
   else if(dets.target.id === "keyF") {
    let audioF = new Audio("audio/3.mp3");
    audioF.play();
   }
    else if(dets.target.id === "keyG") {    
    let audioG = new Audio("audio/4.mp3");
    audioG.play();
   }
   
   else if(dets.target.id === "keyH") {
    let audioH = new Audio("audio/5.mp3");  
    audioH.play();
   }

    else if(dets.target.id === "keyJ") {  
    let audioJ = new Audio("audio/6.mp3");
    audioJ.play();
   }
   
   else if(dets.target.id === "keyK") {
    let audioK = new Audio("audio/7.mp3");
    audioK.play();
   }

    else if(dets.target.id === "keyL") {
    let audioL = new Audio("audio/8.mp3");
    audioL.play();
   }

    else if(dets.target.id === "keySem") {  
    let audioSemi = new Audio("audio/9.mp3");
    audioSemi.play();
   }

})
