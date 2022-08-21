algoritmo "Exericio - Condicionais I"
// Função :
// Autor :
// Data : 20/08/2022
// Seção de Declarações 
var
velocidadeVeiculo, velocidadeLeve, velocidadeMedia, velocidadeGrave, velocidadeGravissima: real


inicio
// Seção de Comandos 
velocidadeLeve <- 50 * 1.1 //acrescimo de 10% ou desconto 10% = 50 * 0.9
velocidadeMedia <- 70
velocidadeGrave <- 90
velocidadeGravissima <- 110

Escreval("Informe a velocidade que o veiculo passou: ")
leia(velocidadeVeiculo)

se velocidadeVeiculo <= velocidadeLeve entao
   Escreval("Isento da multa")
senao
     se velocidadeVeiculo <= velocidadeMedia entao
     Escreval("3 pontos na carteira")
senao
     se velocidadeVeiculo <= velocidadeGrave entao
     Esceval("4 pontos na carteira")
senao
     se velocidadeVeiculo <= velocidadeGravissima entao
     Escreval("5 pontos na carteira")
senao
     Escreval("7 pontos na carteira")
fimse
fimse
fimse
fimse


fimalgoritmo
