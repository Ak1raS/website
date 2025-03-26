function playSound(){
    /*let meow = new Audio()
    let sources = ["https://cdn.discordapp.com/attachments/1284820226416050226/1332805976339775499/UfxuEY9.mp3?ex=679697cb&is=6795464b&hm=52324c244e5f2b5d2b8dc468d54e61d36085994fee19584758d5082e486fd504&","https://cdn.discordapp.com/attachments/1284820226416050226/1332783806629023744/uDU3UYw.mp3?ex=67968325&is=679531a5&hm=bfb55f0e0dc386a8aee4f5ee30afdaefc571952e910304c713a409f10b270056&"]
    meow.src = sources[Math.floor(Math.random() * sources.length)]
    meow.currentTime=0;
    meow.play()*/
    targetDiv = document.getElementById("test")
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
      } else {
        targetDiv.style.display = "block";
      }
}
let but = document.getElementById("button")

