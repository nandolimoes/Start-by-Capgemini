algoritmo "Se e senao se"
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
media <- (nota1+nota2+nota3)/3
se media >= 7 entao
Escreval("Parabéns você passou! Sua média foi de ",media)
senao
     se media < 5 entao
        Escreval ("Você reprovou com a média: ",media)
     senao
          Escreval("Você está de repuração com a média: ",media)
     fimse
fimse

fimalgoritmo
