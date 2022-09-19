Algoritmo "Somando e subtraindo no vetor"

Var

numeroUm, numeroDois, numeroTres: vetor [1..5] de inteiro
i, aux : inteiro  //i = indice, aux = auxiliar temp = temporario
opcao : caractere

Inicio

para i de 1 ate 5 faca
  Escreval("1 - Numero ",i)
  leia(numeroUm[i])
fimpara

para i de 1 ate 5 faca
  Escreval("2 - Numero ",i)
  leia(numeroDois[i])
fimpara

Escreval("1 - Soma")
Escreval("2 - Subtracao")
leia(opcao)

se opcao = "1" entao
  para i de 1 ate 5 faca
       numeroTres[i] <- numeroUm[i] + numeroDois[i]
       Escreval(numeroTres[i])
fimpara
senao
se opcao = "2" entao
      para i de 1 ate 5 faca
           numeroTres[i] <- numeroUm[i] - numeroDois[i]
           Escreval(numeroTres[i])
      fimpara
fimse
fimse

Fimalgoritmo