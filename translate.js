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