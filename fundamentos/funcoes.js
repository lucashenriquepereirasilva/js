/**
 * Estudo das Funções
 */

//Formação simples (literal)
function hello() {
    console.log("hello Function")
}

hello()

// função atribuida



const hello2 = function() {
    console.log("hello Function assigned")

}

console.log(typeof(hello))
hello2()


const  hello3 = () => {
    console.log("Hello arrow Function")

}

console.log(typeof(hello3))
hello3()


// Funções com  passagem de parãmetros e retorno

function somarS(num1 , num2) {
    return (console.log(num1+num2))
}

somarS(2, 3)

//  Função Atribuida

const somarA = function(num1,num2) {
    return (console.log(num1+num2))
}

somarA(4,5)


//  Arrow function

const somarAF = (num1,num2) => {
    return (console.log(num1+num2))
}

somarAF (5,6)



// Arrow Function simplificada (Retorno e implicito)

const somarAFS = (num1, num2) => console.log(num1+num2)

somarAFS ( 2,2)


const somarAFSR = (num1, num2,) => console.log(num1+num2 )


somarAFSR (1, 90)

