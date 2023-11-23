const linguaportugues = document.createElement('script');
linguaportugues.src = 'idiomas/portugues.js';
document.head.appendChild(linguaportugues);

const linguainglesa = document.createElement('script');
linguainglesa.src = 'idiomas/ingles.js';
document.head.appendChild(linguainglesa);

const linguafrancesa = document.createElement('script');
linguafrancesa.src = 'idiomas/francais.js';
document.head.appendChild(linguafrancesa);

const linguaespanhola = document.createElement('script');
linguaespanhola.src = 'idiomas/espanol.js';
document.head.appendChild(linguaespanhola);

let idioma = document.getElementById("idioma")
let boasVindas = document.getElementById("boasVindas")
idioma.addEventListener('change', function() {
    translate(this.value);
});

function translate(idioma){
    let traducao = 
        (idioma == "br") ? portugues()
        : (idioma == "en") ? ingles()
        : (idioma == "fr") ? francais()
        : (idioma == "es") ? espanol()
        : portugues()
    setlanguague(traducao);
}
function setlanguague(traducao){
    btSomar = document.getElementById("btsomar");
    btSomar.value = traducao.soma;
    btSubtrair = document.getElementById("btsubtrair");
    btSubtrair.value = traducao.subtração;
    btMultiplicar = document.getElementById("btmultiplicar");
    btMultiplicar.value = traducao.multiplicação;
    btDividir = document.getElementById("btdividir");
    btDividir.value = traducao.divisão;
    titulo = document.getElementById("titulo");
    titulo.innerHTML = traducao.titulo;
    boasVindas.innerHTML = traducao.boasvindas;
}
