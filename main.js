//1. a
function infosPessoais(){
console.log("Eu sou Mateus, moro em São Leopoldo e sou estudante")
}
infosPessoais()

//1. b
function informacoesPessoais(nome, idade, cidade, profissão){
    console.log(`Eu sou ${nome}, tenho ${Number(idade)} anos, moro em ${cidade} e sou ${profissão.toLowerCase()}`)
}
nome = prompt("Qual o seu nome?")
idade = prompt("Quantos anos você tem?")
cidade = prompt("Em que cidade você mora?")
profissão = prompt("Qual a sua profissão")

informacoesPessoais(nome, idade, cidade, profissão)

//2. a
function somaValores(num1, num2){
    return Number(num1) + Number(num2)
}
console.log(somaValores(prompt("Digite um número"), prompt("Digite outro número")))

//2. b
function comparaValores(num1, num2){
    return num1 >= num2
}
console.log(comparaValores(prompt("Digite um número"), prompt("Digite outro número")))

//2. c
function verificaPar(num){
    num % 2 == 0
}
console.log(verificaPar("Digite um número"))

//2. d
function mostraTamanhoMensagemEMaiusculo(msg){
    console.log(`${msg.length}\n${msg.toUpperCase()}`)
}
mostraTamanhoMensagemEMaiusculo(prompt("Escreva uma mensagem"))

//3

function fazContas(num1, num2){
    return console.log(`Números inseridos: ${num1} e ${num2}\nSoma: ${num1 + num2}\nDiferença: ${num1 - num2}\nMultiplicação: ${num1 * num2}\nDivisão: ${num1 / num2}`)
}
fazContas(prompt("Digite um número"), prompt("Digite outro número"))

//Desafio 1. a
arrow = (a) => {
    console.log(a)
}

//Desafio 1. b
outraArrow = (num1, num2) => {
    arrow(num1+num2)
}

outraArrow(prompt("Digite um número"), prompt("Digite outro número"))

//Desafio 2
function pitagoras(cateto1, cateto2){
    return Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2))
}
console.log(pitagoras(prompt("Digite um número"), prompt("Digite outro número")))