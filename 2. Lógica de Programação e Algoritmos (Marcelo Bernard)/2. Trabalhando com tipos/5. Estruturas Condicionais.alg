algoritmo "Estrutura condicionais"
// Função :
// Autor :
// Data : 20/08/2022
// Seção de Declarações 
var
   nota1, nota2, nota3, media: real
   

inicio
// Seção de Comandos 
Escreval("Informe a nota 1: ")
leia(nota1)
Escreval("Informe a nota 2: ")
leia(nota2)
Escreval("Informe a nota 3: ")
leia(nota3)
media <- (nota1+nota2+nota3) / 3

se media < 7 entao
   Escreval("Aluno está de recuperação!")
senao
   Escreval ("Aluno aprovado, parabéns!")
fimse


fimalgoritmo
