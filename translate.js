<<<<<<< HEAD
let idioma = document.getElementById("idioma")
let boasVindas = document.getElementById("boasVindas")
idioma.addEventListener('change', function() {

    if (this.value == "br"){
        btsomar.value = "Somar"
        btmultiplicar.value = "Multiplicar"
        btsubtrair.value = "Subtrair"
        btdividir.value = "Dividir"
        boasVindas.innerHTML = "essa é uma calculador em diferentes idiomas"
    }
    else if (this.value == "es"){
        btsomar.value = "Sumar"
        btmultiplicar.value = "Multiplicar"
        btsubtrair.value = "Restar"
        btdividir.value = "Dividir"
        boasVindas.innerHTML = "esta es una calculadora en diferentes idiomas"
    }
    else if ( this.value == "en"){
        btsomar.value = "Sum"
        btmultiplicar.value = "Multiply"
        btsubtrair.value = "Subtract"
        btdividir.value = "Divide"
        boasVindas.innerHTML = "this is a calculator in different languages"
    }
    else if (this.value == "fr"){
        btsomar.value = "Ajouter"
        btmultiplicar.value = "Multiplier"
        btsubtrair.value = "Soustraire"
        btdividir.value = "Diviser"
        boasVindas.innerHTML = "c'est une calculatrice dans différentes langues"
    }
});
=======
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
>>>>>>> 93f2e2a (Add language translations for calculator)
