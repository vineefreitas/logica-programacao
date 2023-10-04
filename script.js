// lógica de programação
// problema: obter 3 notas de um aluno , calcular a média,
// exibir a média e exibir a situação do aluno: aprovado,
// em exame ou reprovado.

console.log('Inicio do programa');

// declaração das variáveis

const nota1 = parseInt(prompt('Digite a nota 1:'));
const nota2 = parseInt(prompt('Digite a nota 2:'));
const nota3 = parseInt(prompt('Digite a nota 3:'));

// cáuculo da média
media = (nota1 + nota2 + nota3) / 3;

console.log ('A 1ª nota é:' , nota1)
console.log ('A 2ª nota é:' , nota2)
console.log ('A 3ª nota é:' , nota3)

console.log ('A média do aluno é:' , media)