algoritmo "Tabela Verdade"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 
var
 i, j: inteiro


inicio
i <- 10
j <- 21
        //sim E nao = NAO
        //sim E sim = SIM
        //nao E nao = NAO
se (i = 10) E (j = 20) entao //&& and
    Escreval("Fazer algo")
   //se j = 20 entao
senao
     Escreval("Não fazer nada")
fimse
   
//afirmacao <- i <> 10

            //sim OU nao = SIM
            //sim OU sim = SIM
            //nao OU nao = NAO
se (i = 10) OU (j = 20) entao //|| or alt+124
    Escreval("Fazer algo")
   //se j = 20 entao
senao
     Escreval("Não fazer nada")
fimse


fimalgoritmo
