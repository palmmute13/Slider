import src from "*.png";



window.addEventListener('load', function  () {

    console.log('el contenido ha cambiado');
    var Imgen = [];
    
    Imgen [0] = '/1.jpg';
    Imgen [1] = '/2.jpg';
    Imgen [2] = '/3.jpg';
    Imgen [3] = '/4.jpg';
  var indiceImagenes =0;
   
function cambiarImagenes(){

document.Slide.src = Imagenes[indiceImagenes];
if (indiceImagenes < 2 ){
indiceImagenes ++;
} else{
indiceImagenes = 0;

}

} 
setInterval(cambiarImagenes,1500);



} );