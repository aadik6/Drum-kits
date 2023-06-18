const kits = ["crash", "kick", "snare", "tom"];

const containerE1 = document.querySelector(".container");

kits.forEach((kit) => {
    const btnE1 = document.createElement("button");
    btnE1.classList.add("btn")
    btnE1.innerText=kit;
    btnE1.style.backgroundImage= "url(assets/"+ kit + ".png"    
    containerE1.appendChild(btnE1);
    const audioE1= document.createElement("audio");
    audioE1.src="assets/"
    + kit + ".mp3 "
    containerE1.appendChild(audioE1);
    btnE1.addEventListener("click", ()=>{
        audioE1.play()
    })
     window.addEventListener("keydown", (event)=>{
        if(event.key===kit.slice(0,1)){
            audioE1.play()
            btnE1.transfo
        };
     })

}); 