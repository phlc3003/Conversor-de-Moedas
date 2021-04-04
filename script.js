var nome = prompt("Qual é seu nome?");

var dolar = prompt("Quantos dólares vai gastar?")
var valorEmDolar = parseFloat(dolar)

var valorEmReais = (valorEmDolar * 5.51).toFixed(2)

alert(nome + ", você irá gastar R$ " + valorEmReais)