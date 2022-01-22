var CamasScript = document.createElement('script');  
CamasScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js');
document.head.appendChild(CamasScript);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


makeBase();

function makeBase(){
  let img= new Image()
  xaxis = canvas.width / 2 - img.width / 2
  yaxis = canvas.height / 2 - img.height / 2
  //img.style.width = "100px"
  img.src = "/static/Filtr/example.jpg"
  ctx.drawImage(img, 100, 100)
}

// let img = new Image()
// let fileName = "";

// var file = document.createElement("img")
// file.src = "/static/Filtr/example.jpg"

Caman("#canvas", "/static/Filtr/example.jpg", function () {
    // manipulate image here
    this.brightness(0);
});

document.getElementById("b&w-filter").addEventListener("click", function(){
  Caman("#canvas", "/static/Filtr/example.jpg", function () {
    this.vintage().render();
    this.sinCity.render();
  })
})

document.getElementById("test-filter").addEventListener("click", function(){
  Caman("#canvas", "/static/Filtr/example.jpg", function () {
    this.revert()
  })
})