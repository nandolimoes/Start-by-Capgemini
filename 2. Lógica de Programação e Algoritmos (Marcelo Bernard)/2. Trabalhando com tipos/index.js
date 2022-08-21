// Aula 2 – Trabalhando com Tipos
// Parte 1 
// Fortemente tipadas x fracamente tipadas
// Ex: Brinquedo para macacos para testar o QI e colocar as formas geométricas -> Fortemente tipada

// Parte 2
// Na divisão geralmente espera um número com virgula, no visualG  pede que as variáveis que forem divisíveis sejam declaradas como real
// Literal ou caractere é a mesma coisa
// Logico: booleano

// Parte 3
// Estruturas de condição no visualG
// var
//    nota1, nota2, nota3, media: real
   

// inicio
// Seção de Comandos 
// Escreval("Informe a nota 1: ")
// leia(nota1)
// Escreval("Informe a nota 2: ")
// leia(nota2)
// Escreval("Informe a nota 3: ")
// leia(nota3)
// media <- (nota1+nota2+nota3) / 3

// se media < 7 entao
//    Escreval("Aluno está de recuperação!")
// senao
//    Escreval ("Aluno aprovado, parabéns!")
// fimse


// fimalgoritmo

// Parte 4
// Se não se
// Ponto flutuante = número com virgula
// var
// nota1, nota2, nota3, media: real
// inicio
// Seção de Comandos 
// Escreval("Informe a nota 1: ")
// leia(nota1)
// Escreval("Informe a nota 2: ")
// leia(nota2)
// Escreval("Informe a nota 3: ")
// leia(nota3)
// media <- (nota1+nota2+nota3)/3
// se media >= 7 entao
// Escreval("Parabéns você passou! Sua média foi de ",media)
// senao
//      se media < 5 entao
//         Escreval ("Você reprovou com a média: ",media)
//      senao
//           Escreval("Você está de repuração com a média: ",media)
//      fimse
// fimse

// fimalgoritmo

// Parte 5

// var
// velocidadeVeiculo, velocidadeLeve, velocidadeMedia, velocidadeGrave, velocidadeGravissima: real


// inicio
// Seção de Comandos 
// velocidadeLeve <- 50 * 1.1 //acrescimo de 10% ou desconto 10% = 50 * 0.9
// velocidadeMedia <- 70
// velocidadeGrave <- 90
// velocidadeGravissima <- 110

// Escreval("Informe a velocidade que o veiculo passou: ")
// leia(velocidadeVeiculo)

// se velocidadeVeiculo <= velocidadeLeve entao
//    Escreval("Isento da multa")
// senao
//      se velocidadeVeiculo <= velocidadeMedia entao
//      Escreval("3 pontos na carteira")
// senao
//      se velocidadeVeiculo <= velocidadeGrave entao
//      Esceval("4 pontos na carteira")
// senao
//      se velocidadeVeiculo <= velocidadeGravissima entao
//      Escreval("5 pontos na carteira")
// senao
//      Escreval("7 pontos na carteira")
// fimse
// fimse
// fimse
// fimse


// fimalgoritmo

// Parte 6 – Tabela Verdade

// algoritmo "Tabela Verdade"
// var
//  i, j: inteiro


// inicio
// i <- 10
// j <- 21
        //sim E nao = NAO
         //sim E sim = SIM
        //nao E nao = NAO
// (se i = 10) E (j = 20) entao //&& and
//     Escreval("Fazer algo")
   //se j = 20 entao
// senao
//      Escreval("Não fazer nada")
// fimse
   
 //afirmacao <- i <> 10

             //sim OU nao = SIM
             //sim OU sim = SIM
             //nao OU nao = NAO
// (se i = 10) OU (j = 20) entao //|| or alt+124
//     Escreval("Fazer algo")
    //se j = 20 entao
// senao
//      Escreval("Não fazer nada")
// fimse


// fimalgoritmo
// Parte 7 – Praticando tabela verdade
// Exercício bem comum nas entrevistas de emprego
// algoritmo "Exercício - Tabela Verdade"

// var
// lado1, lado2, lado3 : real

// inicio
// Escreval("Informe o lado 1: ")
// leia(lado1)
// Escreval("Informe o lado 2: ")
// leia(lado2)
// Escreval("Informe o lado 3: ")
// leia(lado3)

// se (lado1 > lado2 + lado3) OU (lado2 > lado1 + lado3) OU (lado3 > lado1 + lado2)entao
       //true|verdade && false|falso
//       Escreval("Não é triangulo")
// senao
//      se (lado1 = lado2) E (lado2 = lado3) entao
//         Escreval("Triângulo equilátero!")
//      senao
//      se (lado1 = lado2) OU (lado2 = lado3) OU (lado1 = lado3) entao
//         Escreval("Triângulo isósceles")
//      senao
//           Escreval("Triângulo escaleno")
//      fimse
//      fimse
      //mesmo bloco hierárquico
// fimse
 //outro bloco hierárquico
     
      

// Fimalgoritmo

// Parte 8 – IMC
// algoritmo "Extra - IMC"

// var
// altura, peso, imc : real

// inicio
// Escreval("Informe sua altura: ")
// leia(altura)
// Escreval("Informe seu peso: ")
// leia(peso)
// imc <- peso / altura ^ 2

// se imc < 19 entao
//    escreval("Abaixo do peso")
// senao
// se imc < 24 entao
//    escreval("Peso ideal")
// senao
//    escreval("Acima do peso")
// fimse
// fimse

// CONCEITO DE CURTO CIRCUITO!

// Parte 9 
// algoritmo "Votação"

// var
// voto: literal

// inicio

// Escreval("Digite seu voto:")
// leia(voto)

//  se voto = "13" entao
//     Escreval("Você votou no Lulinha")
//  senao
//  se voto = "22" entao
//     Escreval("Você votou no bozo")
//  se voto = "12" entao
//     Escreval("VocÊ votou no Cirão da massa")
//  fimse
//  fimse
//  fimse

// fimalgoritmo

// algoritmo "Votação - Caso"

// var
// voto: literal

// inicio

// Escreval("Digite seu voto:")
// leia(voto)

// Escolha voto
// caso "13"
//      Escreval("Você votou no lulinha")
// caso "22"
//      Escreval("Você votou no bozo")
// caso "12"
//      Escreval("VocÊ votou no cirão da massa")
// outrocaso
//      Escreval("Voto nulo")
// fimescolha

// fimalgoritmo



