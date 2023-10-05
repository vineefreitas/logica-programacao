function mediaAluno() {

// lógica de programação
// problema: obter 3 notas de um aluno , calcular a média,
// exibir a média e exibir a situação do aluno: aprovado,
// em exame ou reprovado.

console.log('Inicio do programa');

// declaração das variáveis

const nota1 = parseInt(document.getElementById('nota1').value);
const nota2 = parseInt(document.getElementById('nota2').value);
const nota3 = parseInt(document.getElementById('nota3').value);

// cáuculo da média
media = (nota1 + nota2 + nota3) / 3;

console.log ('A 1ª nota é:' , nota1)
console.log ('A 2ª nota é:' , nota2)
console.log ('A 3ª nota é:' , nota3)

document.getElementById('resultado').innerHTML = 'A média do aluno é:' + media + '<br>' ;

if (media >= 7) {
    document.getElementById('resultado').innerHTML += 'Situação: Aprovado';
} else if (media >= 5) {
    document.getElementById('resultado').innerHTML += 'Situação: Exame';
} else {
    document.getElementById('resultado').innerHTML += 'Situação: Reprovado';
}

console.log ('Fim do programa.')

}