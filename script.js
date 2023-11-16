function clq1() {
    alert("Voce clicou no botão 1")
}

let valor1 = (document.querySelector("#valor1"))
let valor2 = (document.querySelector("#valor2"))
let resultado = document.querySelector("#resultado")
let btsomar = document.getElementById("btsomar")
btsomar.addEventListener("click", function() { somar(Number(valor1.value), Number(valor2.value));})
let btmultiplicar = document.getElementById("btmultiplicar")
btmultiplicar.addEventListener("click", function() { multiplicar(Number(valor1.value), Number(valor2.value));})
let btsubtrair = document.getElementById("btsubtrair")
btsubtrair.addEventListener("click", function() { subtrair(Number(valor1.value), Number(valor2.value));})
let btdividir = document.getElementById("btdividir")
btdividir.addEventListener("click", function() { dividir(Number(valor1.value), Number(valor2.value));})



function somar(a, b) {
    let soma = a + b
    resultado.textContent = soma
}

function subtrair(a, b) {
    let sub = a - b
    resultado.innerHTML = sub
}

function multiplicar(a, b) {
    let mult = a * b
    resultado.innerHTML = mult
}

function dividir(a, b) {
    let div = a / b
    resultado.innerHTML = div
}

/*fazer tradução do texot do arquivo*/
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