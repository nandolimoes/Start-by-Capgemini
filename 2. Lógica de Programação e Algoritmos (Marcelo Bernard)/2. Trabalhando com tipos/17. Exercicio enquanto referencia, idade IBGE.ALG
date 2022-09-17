Algoritmo "Exercicio enquanto referencia, idade IBGE"

Var
// Seção de Declarações das variáveis 

mediaIdade, porcentagemMenorIdade, qtdMenoresIdade, somaIdades : real
maisNovo , maisVelho, qtdEntrevistados, idadeInformada : inteiro




Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

maisNovo <- 9999
maisVelho <- 0
qtdEntrevistados <- 0
qtdMenoresIdade <- 0 //boa praticar setar antes

enquanto qtdEntrevistados < 5 faca
         escreva("Por favor, informe a sua idade: ")
         leia(idadeInformada)
         
         se  idadeInformada >= maisVelho entao
             maisVelho <- IdadeInformada
         fimse
         
         se idadeInformada <= maisNovo entao
            maisNovo <- IdadeInformada
         fimse
         
         se idadeInformada < 18 entao
            qtdMenoresIdade <- qtdMenoresIdade + 1
         fimse

somaIdades <- somaIdades + idadeInformada
qtdEntrevistados <- qtdEntrevistados + 1
         
fimenquanto

Escreval("Mais novo ", maisNovo)
Escreval("Mais velho ", maisVelho)

porcentagemMenorIdade <- (qtdMenoresIdade / 5) * 100
Escreval("Porcentagem de menores de idade é de", porcentagemMenorIdade,"%")

mediaIdade <- somaIdades / 5
Escreval("Media de idade ", mediaIdade)

Fimalgoritmo