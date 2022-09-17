Algoritmo "Exercicio repita, senha e limpatela"

Var
senha, resposta : caractere
i : inteiro

Inicio
i <- 0
Escreval("Informe a senha:")
leia(senha)
limpatela //limpa o prompt

repita

Escreval("Digite a senha para sair do programa:")
leia(resposta)
limpatela
i <- i + 1
se i = 5 entao
interrompa
fimse

ate resposta = senha


Fimalgoritmo