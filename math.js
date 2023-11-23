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

