function playSound(){
    let meow = new Audio()
    let sources = ["./sounds/beat.mp3","./sounds/meow.mp3"]
  
    meow.src = sources[Math.floor(Math.random() * sources.length)]
    meow.currentTime=0;
    meow.play()
    targetDiv = document.getElementById("test")
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
      } else {
        targetDiv.style.display = "block";
      }
}
let but = document.getElementById("button")

