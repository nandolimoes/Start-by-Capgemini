algoritmo "Se e senao se"
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
media <- (nota1+nota2+nota3)/3
se media >= 7 entao
Escreval("Parab?ns voc? passou! Sua m?dia foi de ",media)
senao
     se media < 5 entao
        Escreval ("Voc? reprovou com a m?dia: ",media)
     senao
          Escreval("Voc? est? de repura??o com a m?dia: ",media)
     fimse
fimse

fimalgoritmo
