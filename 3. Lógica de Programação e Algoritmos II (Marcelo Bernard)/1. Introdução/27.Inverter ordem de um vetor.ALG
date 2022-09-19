Algoritmo "Inverter ordem de um vetor"
//Dado um vetor de 10 números fazer um segundo vetor que após o primeiro ser
//preenchido o segundo vetor será preenchido com a ordem reversa do primeiro.

Var

numeros, numerosReversos: vetor [1..10] de inteiro
i, aux : inteiro  //i = indice, aux = auxiliar temp = temporario


Inicio

para i de 1 ate 10 faca
  Escreval("Numero ",i)
  leia(numeros[i])
fimpara

aux <- 11

para i de 1 ate 10 faca
     numerosReversos[aux-i] <- numeros[i]
fimpara



Fimalgoritmo