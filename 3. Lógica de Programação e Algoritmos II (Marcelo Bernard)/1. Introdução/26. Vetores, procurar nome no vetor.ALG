Algoritmo "Vetores, procurar nome no vetor"

Var
nomes : vetor[1..5] de caractere
i, sucesso : inteiro
pesquisa: caractere


Inicio

para i de 1 ate 5 faca //começa no indice 0 mas no pascal no indice 1
     Escreval("Informe o nome a cadastrar")
     leia(nomes[i])
fimpara
limpatela
//ctrl j mostra todas as funções existentes

Escreva("Informe um nome a pesquisar: ")
leia(pesquisa)

sucesso <- 0

para i de 1 ate 5 faca
       se nomes[i] = pesquisa entao
         sucesso <- 1
       fimse
fimpara

se sucesso = 1 entao
   Escreval("Cliente encontrado")
senao
     Escreval("Cliente não encontrado")
fimse

Fimalgoritmo