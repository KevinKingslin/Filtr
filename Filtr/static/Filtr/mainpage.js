var CamasScript = document.createElement('script');  
CamasScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js');
document.head.appendChild(CamasScript);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


makeBase();

function makeBase(){
  let img = new Image()
  img.src = "/static/Filtr/example.jpg"
  ctx.drawImage(base_image, 100, 100)
}

Caman("#canvas", "/static/Filtr/example.jpg", function () {
    // manipulate image here
    this.brightness(0);
});