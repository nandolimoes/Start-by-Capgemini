algoritmo "Exerc?cio - Tabela Verdade"

var
lado1, lado2, lado3 : real

inicio
Escreval("Informe o lado 1: ")
leia(lado1)
Escreval("Informe o lado 2: ")
leia(lado2)
Escreval("Informe o lado 3: ")
leia(lado3)

se (lado1 > lado2 + lado3) OU (lado2 > lado1 + lado3) OU (lado3 > lado1 + lado2)entao
      //true|verdade && false|falso
      Escreval("N?o ? triangulo")
senao
     se (lado1 = lado2) E (lado2 = lado3) entao
        Escreval("Tri?ngulo equil?tero!")
     senao
     se (lado1 = lado2) OU (lado2 = lado3) OU (lado1 = lado3) entao
        Escreval("Tri?ngulo is?sceles")
     senao
          Escreval("Tri?ngulo escaleno")
     fimse
     fimse
     //mesmo bloco hier?rquico
fimse
//outro bloco hier?rquico
     
      

fimalgoritmo
