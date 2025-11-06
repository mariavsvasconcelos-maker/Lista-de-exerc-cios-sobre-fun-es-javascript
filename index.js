/**** Escreva o código abaixo 👇******/
function somar(a, b) {
  return a + b;
}


function multiplicar(a, b) {
  return a * b;
}


function subtrair (a,b) {
  return a- b; 
}

function dividir(a, b) {
  if (b === 0) {
    throw Error("Erro: divisão por zero");
  } 
  return a / b; 
}

function calcularMedia (nota1, nota2, nota3, nota4){
  const somaTotal = nota1 + nota2 + nota3 + nota4;
  return dividir (somaTotal, 4);
}

function elevarPotencia (a, b) {
  return Math.pow(a, b);
}

function calcularAreaRetangulo (a,b) {
  return multiplicar (a, b);
}


function verificarParOuImpar (numero) {
  if (numero%2===0){
    return "par"; 
  } else {
    return "ímpar";
  }

}

function calcularRaizQuadrada (numero) {
  return Math.sqrt(numero);
}

function calcularHipotenusa(cateto1, cateto2) {
  const somaDosQuadrados = elevarPotencia(cateto1, 2) + elevarPotencia(cateto2, 2);
  return calcularRaizQuadrada(somaDosQuadrados);
}




/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
