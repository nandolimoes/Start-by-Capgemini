Algoritmo "Montando o primeiro menu, repita se senao, oficina mecanica"

Var
opcaoMenu : caractere
//caractere pois é um valor constante nao vai ser feito nenhum calculo matemático
//pode ser feito com while ou enquanto mas é melhor a opcao reptira do while
totalConta: inteiro

Inicio

totalConta <- 0

repita

      Escreval("1 - Troca de óleo")
      Escreval("2 - Balanceamento")
      Escreval("3 - Sair")
      leia(opcaoMenu)
      se opcaoMenu =  "1" entao
         totalConta <- totalConta + 100
      senao
      se opcaoMenu = "2" entao
         totalConta <- totalConta + 70
      fimse
      fimse

limpatela
ate opcaoMenu = "3"
Escreval("Total conta: R$ ",totalConta)



Fimalgoritmo