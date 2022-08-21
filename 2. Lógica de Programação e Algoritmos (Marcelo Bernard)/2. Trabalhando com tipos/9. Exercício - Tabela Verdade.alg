algoritmo "Exercício - Tabela Verdade"

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
      Escreval("Não é triangulo")
senao
     se (lado1 = lado2) E (lado2 = lado3) entao
        Escreval("Triângulo equilátero!")
     senao
     se (lado1 = lado2) OU (lado2 = lado3) OU (lado1 = lado3) entao
        Escreval("Triângulo isósceles")
     senao
          Escreval("Triângulo escaleno")
     fimse
     fimse
     //mesmo bloco hierárquico
fimse
//outro bloco hierárquico
     
      

fimalgoritmo
