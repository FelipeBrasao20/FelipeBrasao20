// Declaração de variáveis
const nome = 'Felipe'
const sobrenome = 'Brasão'
// Tipos
const nome = 'Felipe' // string
const idade = 20 // number
const vivo = true // boolean
const pessoa = {
  nome: 'Felipe',
  idade: 20
} //objeto
const nomes = ['Sergio', 'Felipe']
nomes[0]
nomes[1]
// Operadores
2 + 2 // 4 
2 * 3 // 6
4 % 3 // 1
// Operadores básico + - * / %
a = b // Pegue o valor de b e guarde em a
// Operadores de comparação
a == b
a > b
a <= b
a != b // boolean
// if else
// condicionais
const numero = 1

if (numero % 2 == 0) {
  // número é par
} else {
  // numero é ímpar
}
// Estruturas de repetição
while (numero < 5) {
  // faço algo
  numero = numero + 1
}

for (let i = 0; i < 5; i++) {
  // Faz alguma coisa
  console.log('Oi')
}
// Funções
function somaDoisNumeros(numero1, numero2) {
  return numero1 + numero2
}

somaDoisNumeros(1, 2) // 3
// Execução e Escopo
const a = 2
const b = a // b == 2

const a = 2

if (x == y) {
  const c = a
}

const b = c // ?

[a, b, [c]] // c vê a e b, mas a e b não vêem c