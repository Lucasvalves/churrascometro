// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas"); // //Pegando os inputs e realizando tribuições
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {


    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value; //pegando os valores que o usuario inseriu nos inputs
    let duracao = inputDuracao.value;


    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = ` <h4> Serão necessarios: </h4>`
    resultado.innerHTML += `<p> 🥩${qdtTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>🍺${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>🥤${Math.ceil(qdtTotalBebidas / 2000)} Pet's 2l de Refrigerantes</p>`


}

function carnePP(duracao) {
    
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}
function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}