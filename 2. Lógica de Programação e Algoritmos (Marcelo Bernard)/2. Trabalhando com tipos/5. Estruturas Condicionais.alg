algoritmo "Estrutura condicionais"
// Fun??o :
// Autor :
// Data : 20/08/2022
// Se??o de Declara??es 
var
   nota1, nota2, nota3, media: real
   

inicio
// Se??o de Comandos 
Escreval("Informe a nota 1: ")
leia(nota1)
Escreval("Informe a nota 2: ")
leia(nota2)
Escreval("Informe a nota 3: ")
leia(nota3)
media <- (nota1+nota2+nota3) / 3

se media < 7 entao
   Escreval("Aluno est? de recupera??o!")
senao
   Escreval ("Aluno aprovado, parab?ns!")
fimse


fimalgoritmo
