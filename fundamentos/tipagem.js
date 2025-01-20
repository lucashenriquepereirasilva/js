/**
 * Tipagem Dinamica - JS
 */


// Declaração de variaveis
let nome, idade, peso, altura, vip, imc



// entradan de dados

nome = "Lucas henrique"
idade = 19
peso = 71
altura = 1.70
vip = true

// Linha abaixo  Verifica  o tipo da variavel
 // console.log(typeof(vip))

console.clear()

// Processamentos
// imc ( indice de massa corporal | fem ( frequência cardiaca Máxima))
imc = peso /  (altura * altura)
fcm = 208 - (0.7 * idade)


// Saída
console.log("Ficha do Aluno")
console.log("______________________")
console.log(`nome: ${nome}`)
console.log(`idade: ${idade}`)
console.log(`peso: ${peso}`)
console.log(`altura: ${altura}`)
console.log(`vip: ${vip}`)
console.log(`IMC: ${imc.toFixed(2)}`)
console.log(`FCM: ${fcm}`)