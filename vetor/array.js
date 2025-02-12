/**
 * estudo do array (vetor)
 * @author lucas henrique
 */

console.clear()
let alunos = []
console.log(typeof(alunos))

 let alunosEm1 = ["vitor", "tania",  "pedro",  "Maria",  "viviane"]
 console.log(typeof(alunosEm1))

 console.log(alunosEm1.length)
 // exibindo os dados de um array 

 console.log(alunosEm1)
 // exibindo um aluno do array

 console.log(alunosEm1[2])

 console.table(alunosEm1)

 //adicionando um elemeto ao array
 alunosEm1.push("luiza")
 console.table(alunosEm1)

 // Modificar um elemento array

 alunosEm1[0] = "victor"
 console.table(alunosEm1)

 delete alunosEm1[2]
 console.table(alunosEm1)

// percorrendo um array
 let notas = [3,8,5,9,2]

  // Uso do laço for para percorrer um array
 for (let i = 0; i < notas.length; i++ ) {
    console.log(notas[i])

 } 

 // foreach ( simplificação do laco for para uso array)

 notas.forEach((n) => {
    console.log(n)
 })

 // map (mapeamento da estrutura de dados para calculos ou conversões)

 let notasAtualizadas = notas.map((na) => {
    return na + 1
 })

 console.log(notas)
 console.log(notasAtualizadas)

  // Exemplo 2: conversão de um sistema de notas
  /*

  NA - Não atendeu (nota < 5)

  PA


*/


let notasconvertidas = notas.map((nc) => {
    if (nc < 5) {
        return "NA"
    } else if (nc > 7) {
        return "A"
    } else {
        return "PA"
    }
})

console.log (notas)
console.log(notasconvertidas)