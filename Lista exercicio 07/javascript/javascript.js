
function clicar1() {
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;

    var resultado = parseInt(num1) + parseInt(num2);    
    document.querySelector(".resultado").innerHTML = "O resultado é: " + resultado;
}

function clicar2() {
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;

    var resultado = parseInt(num1) - parseInt(num2);    
    document.querySelector(".resultado").innerHTML = "O resultado é: " + resultado;
}

function clicar3() {
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;

    var resultado = parseInt(num1) * parseInt(num2);    
    document.querySelector(".resultado").innerHTML = "O resultado é: " + resultado;
}

function clicar4() {
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;

    var resultado = parseInt(num1) / parseInt(num2);    
    document.querySelector(".resultado").innerHTML = "O resultado é: " + resultado;
}

/* ========================================================================================================= */
/* ========================================================================================================= */


function ordenar() {
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;
    var num3 = document.querySelector(".num3").value;
    var array = [num1, num2, num3];
    array.sort(compararNumeros);
    var resultado = array;
    document.querySelector(".resultado").innerHTML = "O Ordem crescente é: " + resultado;
}

function compararNumeros(a, b) {    //função para desbugar a ordem incorreta dos números
    return a - b;
}


/* ========================================================================================================= */
/* ========================================================================================================= */


function Confirmar(){

    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;
    var num3 = document.querySelector(".num3").value;
    var num4 = document.querySelector(".num4").value;
    
    var resultado1 = Math.max(num1 ,num2, num3, num4);
    var resultado2 = Math.min(num1 ,num2, num3, num4);

    var resultado3 = (parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4)) / 4;

    document.querySelector(".resultado1").innerHTML = "O Maior valor é: " + resultado1;
    document.querySelector(".resultado2").innerHTML = "O Menor valor é: " + resultado2;
    document.querySelector(".resultado3").innerHTML = "A Média é: " + resultado3;

}


/* ========================================================================================================= */
/* ========================================================================================================= */


function executar(){

    var num1 = document.querySelector(".num1").value;

    if ((parseInt(num1) % 2 == 0)){
        var resultado = num1;
        document.querySelector(".resultado").innerHTML = "Número Pár: " + resultado;
    }

    else if ((parseInt(num1) % 2 == 1)){
        var resultado = num1;
        document.querySelector(".resultado").innerHTML = "Número Impár: " + resultado;
    }
    else {
        document.querySelector(".resultado").innerHTML = "Número inválido";
    }

    var nome = document.querySelector(".nome").value;
    document.querySelector(".resultado2").innerHTML = "Seu nome é: " + nome;
}

/* ========================================================================================================= */
/* ========================================================================================================= */


function IMC() {
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;

    var num2 = (num2 * num2);
    var total = (num1 / num2);

    var resultado = total;

    if (total < 18.5) {
        document.querySelector(".resultado").innerHTML = "Seu IMC é " + resultado + " Menor que 18,5 Peso abaixo do normal";
    }

    else if ((total >= 18.5) && (total <= 24.9 )){
        document.querySelector(".resultado").innerHTML = "Seu IMC é " + resultado + " Entre 18,5 e 24,9 Peso ideal";
    }

    else if ((total >= 25) && (total <= 29.9 )){
        document.querySelector(".resultado").innerHTML = "Seu IMC é " + resultado + " Entre 25 e 29,9 Acima do peso";
    }

    else if ((total >= 30) && (total <= 34.9 )){
        document.querySelector(".resultado").innerHTML = "Seu IMC é " + resultado + " Entre 30 e 34,9 Obesidade Grau I";
    }

    else if ((total >= 35) && (total <= 39.9 )){
        document.querySelector(".resultado").innerHTML = "Seu IMC é " + resultado + " Entre 35 e 40 Obesidade Grau II";
    }

    else if (total > 40){
        document.querySelector(".resultado").innerHTML = "Seu IMC é " + resultado + " Maior que 40Obesidade Grau III";
    }
}


/* ========================================================================================================= */
/* ========================================================================================================= */


function clicar10() {
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;

    var resultado = parseInt(num1) * parseInt(num2);    
    document.querySelector(".resultado").innerHTML = "A Área do Quadrado é: " + resultado;
}

function clicar20() {
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;

    var resultado = parseInt(num1) * parseInt(num2);    
    document.querySelector(".resultado").innerHTML = "A Área do Retângulo é: " + resultado;
}

function clicar30() {
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;

    var resultado = ((parseInt(num1) * parseInt(num2)) / 2);    
    document.querySelector(".resultado").innerHTML = "A Área do Triângulo é: " + resultado;
}

function clicar40() {
    var num3 = document.querySelector(".num3").value;

    var aux = (num3 * num3);   
    var resultado = (3.14 * aux);

    document.querySelector(".resultado").innerHTML = "A Área do Círculo é: " + resultado;
}