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

// parte 10

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


// fimalgoritmo

// parte 11

// algoritmo "Vota��o"

// var
// voto: literal

// inicio

// Escreval("Digite seu voto:")
// leia(voto)

//  se voto = "13" entao
//     Escreval("Voc� votou no Lulinha")
//  senao
//  se voto = "22" entao
//     Escreval("Voc� votou no bozo")
//  se voto = "12" entao
//     Escreval("Voc� votou no Cir�o da massa")
//  fimse
//  fimse
//  fimse

// fimalgoritmo

// parte 12

// algoritmo "Vota��o - Caso"

// var
// voto: literal

// inicio

// Escreval("Digite seu voto:")
// leia(voto)

// Escolha voto
// caso "13"
//      Escreval("Voc� votou no lulinha")
// caso "22"
//      Escreval("Voc� votou no bozo")
// caso "12"
//      Escreval("Voc� votou no cir�o da massa")
// outrocaso
//      Escreval("Voto nulo")
// fimescolha

// fimalgoritmo

// parte 13

// algoritmo "MOD e DIV"
 // Disciplina   : [Linguagem e L�gica de Programa��o] 
 // Professor   : Antonio Carlos Nicolodi 

// var
// x, y, w, z: inteiro


// inicio
// x <- 10
// y <- 3
// w <- x DIV y //retorna s� por��o inteira da divis�o
// z <- x % y //retorna o resto da divis�o
// Escreval(w)
// Escreval(z)


// fimalgoritmo

// parte 14

// algoritmo "Descobrir se � par ou impar"


// var
// x: inteiro


// inicio
// Escreval("Informe um n�mero:")
// leia(x)

// se x MOD 2 = 1 entao //%
//    Escreval("N�mero �mpar")
// senao
//    Escreval("N�mero par")
// fimse


// fimalgoritmo

// parte 15

// algoritmo "Enquanto" //while fazer at� determinada condi��o ser mantida

// var
// alturaMarcelo, alturaJoao, crescimentoAnualMarcelo, crescimentoAnualJoao : real
// idade : inteiro


// inicio

// alturaMarcelo <- 1.20
// alturaJoao <- 1.05
// crescimentoAnualMarcelo <- 0.05
// crescimentoAnualJoao <- 0.07
// idade <- 8

// enquanto alturaMarcelo >= alturaJoao faca
//  alturaMarcelo <- alturaMarcelo + crescimentoAnualMarcelo
//  alturaJoao <- alturaJoao + crescimentoAnualJoao
//  idade <- idade + 1

// fimenquanto //sem essa parada seria um looping infinito

// escreval("Idade ", idade)
// escreval("Altura de Jo�o ", alturaJoao)
// escreval("Altura de Marcelo ", alturaMarcelo)

// fimalgoritmo

// parte 16

// Algoritmo "Enquanto"

// Var
 // Se��o de Declara��es das vari�veis 
// i : inteiro

// Inicio
 // Se��o de Comandos, procedimento, fun��es, operadores, etc... 
// i <- 0
// escreval("inicio")
// enquanto i <= 100 faca
//    escreval(i)
//    i <- i + 1
   
//    se i = 50 entao
//    escreval("O i vale 50")
//    interrompa
//    fimse
     //ter uma flag de saida no enquanto, interrompa

// fimenquanto
// escreval("fim")

// Fimalgoritmo

// parte 17 

// Algoritmo "Exercicio enquanto referencia, idade IBGE"

// Var
 // Se��o de Declara��es das vari�veis 

// mediaIdade, porcentagemMenorIdade, qtdMenoresIdade, somaIdades : real
// maisNovo , maisVelho, qtdEntrevistados, idadeInformada : inteiro




// Inicio
 // Se��o de Comandos, procedimento, fun��es, operadores, etc... 

// maisNovo <- 9999
// maisVelho <- 0
// qtdEntrevistados <- 0
// qtdMenoresIdade <- 0 //boa praticar setar antes

// enquanto qtdEntrevistados < 5 faca
//          escreva("Por favor, informe a sua idade: ")
//          leia(idadeInformada)
         
//          se  idadeInformada >= maisVelho entao
//              maisVelho <- IdadeInformada
//          fimse
         
//          se idadeInformada <= maisNovo entao
//             maisNovo <- IdadeInformada
//          fimse
         
//          se idadeInformada < 18 entao
//             qtdMenoresIdade <- qtdMenoresIdade + 1
//          fimse

// somaIdades <- somaIdades + idadeInformada
// qtdEntrevistados <- qtdEntrevistados + 1
         
// fimenquanto

// Escreval("Mais novo ", maisNovo)
// Escreval("Mais velho ", maisVelho)

// porcentagemMenorIdade <- (qtdMenoresIdade / 5) * 100
// Escreval("Porcentagem de menores de idade � de", porcentagemMenorIdade,"%")

// mediaIdade <- somaIdades / 5
// Escreval("Media de idade ", mediaIdade)

// Fimalgoritmo

// parte 18

// Algoritmo "Repita"

//Repita usa a mesma l�gia do enquanto a diferen�a � que o enquanto antes de
//rodar faz uma chegagem, o repita executa primeiramente 1 l�gica de programa��o
//e depois faz a checagem para verificar se � para fazer o looping novamente
//O REPITA � IDEAL PARA A CRIA��O DE MENUS, o repita � um pouco melhor em alguns casos
//por�m o enquanto � mais poderoso por fazer a checagem previamente
//o enquanto � como se fosse um se que roda v�rias vezes
//enquanto = while
//repite = do while

// Var

// i : inteiro

// Inicio

// i <- 0

// repita
// Escreval(i)
// i <- i + 1

// ate i > 10


// Fimalgoritmo

// parte 19

// Algoritmo "Exercicio repita, senha e limpatela"

// Var
// senha, resposta : caractere
// i : inteiro

// Inicio
// i <- 0
// Escreval("Informe a senha:")
// leia(senha)
// limpatela //limpa o prompt

// repita

// Escreval("Digite a senha para sair do programa:")
// leia(resposta)
// limpatela
// i <- i + 1
// se i = 5 entao
// interrompa
// fimse

// ate resposta = senha


// Fimalgoritmo

// parte 20

// Algoritmo "Montando o primeiro menu, repita se senao, oficina mecanica"

// Var
// opcaoMenu : caractere
//caractere pois � um valor constante nao vai ser feito nenhum calculo matem�tico
//pode ser feito com while ou enquanto mas � melhor a opcao reptira do while
// totalConta: inteiro

// Inicio

// totalConta <- 0

// repita

//       Escreval("1 - Troca de �leo")
//       Escreval("2 - Balanceamento")
//       Escreval("3 - Sair")
//       leia(opcaoMenu)
//       se opcaoMenu =  "1" entao
//          totalConta <- totalConta + 100
//       senao
//       se opcaoMenu = "2" entao
//          totalConta <- totalConta + 70
//       fimse
//       fimse

// limpatela
// ate opcaoMenu = "3"
// Escreval("Total conta: R$ ",totalConta)

// parte 21

// Algoritmo "Comando Para(para i de x ate y fimpara)"

// Var
 // melhor amigo pra trabalhar com vetor, funcoes, procedimentos, bando de dados
 // para + vetor
 //USAR O PARA SEMPRE QUE SOUBER OS VALORES CONSTANTES
 //ENQUANTO E REPITA QUANDO TIVER UM BLOCO DE C�DIGO QUE VC N�O TEM IDEIA QUANTAS VEZES
 //VAI REPETIR � AT� O USU�RIO DAR A FLAG DE SA�DA

// i : inteiro


// Inicio

 //duas formas de fazer de 1 a 10

// i <- 0

// enquanto i <= 10 faca
//          Escreval(i)
//          i <- i + 1
// fimenquanto

// repita
//       Escreval(i)
//       i <- i + 1
// at� i > 10

// para i de 1 ate 10 faca
//      Escreval(i)
//      se i = 6 entao
//         Escreval(i)
//         interrompa
//      fimse
// fimpara

// para i de 30 ate 50 faca
//      se i % 2 = 0 entao
//         Escreval(i)
//      fimse
// fimpara



// Fimalgoritmo

// parte 22

// Algoritmo "Para e passo"

 //muito poderoso quando vc sabe o valor de quanto a quanto
// Var
// i, w, start, end : inteiro


// Inicio

// Escreva("Come�o: ")
// leia(start)

// Escreva("Fim: ")
// leia(end)

// Escreva("Escreva o valor do decremento: ")
// leia(w)


// para i de start ate end passo w faca //passo 1 pula de 1 em 1, passo 2 pula 2 em 2
//     Escreval(i)
// fimpara



// Fimalgoritmo

//parte 23

// Algoritmo "Comando aleatório"
//serve para sortear um número que tenha começo e fim
// Var
// i, aleatorioMaximo, aleatorioMinimo, incremento : inteiro


// Inicio

// repita
// aleatorio 1,100
// leia(aleatorioMaximo)
// leia(aleatorioMinimo)
// aleatorio off
// ate aleatorioMaximo >= aleatorioMinimo
// limpatela

// aleatorio 1,5
// leia(incremento)
// aleatorio off
// limpatela

// para i de aleatorioMinimo ate aleatorioMaximo passo incremento faca
//      Escreval(i)
// fimpara

// Fimalgoritmo

// Parte 24

// Algoritmo "Debug"

// Var
// x, y, w: inteiro


// Inicio
//  Escreval("X")
//  leia(x)
//  Escreval("Y")
//  leia(y)
  //break point f5
 
//  w <- x + y
//  escreval(w)
  //para continuar passo a passo linha a linha f8
  //para ler at� o pr�ximo break point f9

// Fimalgoritmo

// parte 25

// Algoritmo "Vetores e arrays"

// Var
// vetorNomes : vetor[1..5] de caractere
// vetorIdades : vetor[1..5] de inteiro
// i : inteiro

// Inicio

// para i de 1 ate 5 faca
// Escreva("Informe seu nome: ")
// leia(vetorNomes[i])

// Escreva("Informe sua idade: ")
// leia(vetorIdades[i])


// Escreval(vetorNomes[i])
// Escreval(vetorIdades[i])


// fimpara

// Fimalgoritmo

//parte 26

// Algoritmo "Vetores, procurar nome no vetor"

// Var
// nomes : vetor[1..5] de caractere
// i, sucesso : inteiro
// pesquisa: caractere


// Inicio

// para i de 1 ate 5 faca //come�a no indice 0 mas no pascal no indice 1
//      Escreval("Informe o nome a cadastrar")
//      leia(nomes[i])
// fimpara
// limpatela
 //ctrl j mostra todas as fun��es existentes

// Escreva("Informe um nome a pesquisar: ")
// leia(pesquisa)

// sucesso <- 0

// para i de 1 ate 5 faca
//        se nomes[i] = pesquisa entao
//          sucesso <- 1
//        fimse
// fimpara

// se sucesso = 1 entao
//    Escreval("Cliente encontrado")
// senao
//      Escreval("Cliente n�o encontrado")
// fimse

// Fimalgoritmo

// Parte 27

// Algoritmo "Inverter ordem de um vetor"
 //Dado um vetor de 10 n�meros fazer um segundo vetor que ap�s o primeiro ser
 //preenchido o segundo vetor ser� preenchido com a ordem reversa do primeiro.

// Var

// numeros, numerosReversos: vetor [1..10] de inteiro
// i, aux : inteiro  //i = indice, aux = auxiliar temp = temporario


// Inicio

// para i de 1 ate 10 faca
//   Escreval("Numero ",i)
//   leia(numeros[i])
// fimpara

// aux <- 11

// para i de 1 ate 10 faca
//      numerosReversos[aux-i] <- numeros[i]
// fimpara



// Fimalgoritmo

// Algoritmo "Somando e subtraindo no vetor"

// Var

// numeroUm, numeroDois, numeroTres: vetor [1..5] de inteiro
// i, aux : inteiro  //i = indice, aux = auxiliar temp = temporario
// opcao : caractere

// Inicio

// para i de 1 ate 5 faca
//   Escreval("1 - Numero ",i)
//   leia(numeroUm[i])
// fimpara

//Parte 28

// para i de 1 ate 5 faca
//   Escreval("2 - Numero ",i)
//   leia(numeroDois[i])
// fimpara

// Escreval("1 - Soma")
// Escreval("2 - Subtracao")
// leia(opcao)

// se opcao = "1" entao
//   para i de 1 ate 5 faca
//        numeroTres[i] <- numeroUm[i] + numeroDois[i]
//        Escreval(numeroTres[i])
// fimpara
// senao
// se opcao = "2" entao
//       para i de 1 ate 5 faca
//            numeroTres[i] <- numeroUm[i] - numeroDois[i]
//            Escreval(numeroTres[i])
//       fimpara
// fimse
// fimse

// Fimalgoritmo