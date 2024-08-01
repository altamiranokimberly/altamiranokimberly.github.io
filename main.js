//console.log("Hola mundo! deesde la consola");
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<h2> Desarrolladora Frontend Jr | Programadora Jr. </h2>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<h2> Si lo puedes imaginar, lo puedes crear!</h2>')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('<strong><h2>programar!</h2></strong>')
    .pauseFor(2500)
    .start();