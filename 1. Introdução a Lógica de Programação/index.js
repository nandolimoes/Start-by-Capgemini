// Aula 05 - Software e Linguagens
// Linguagens compiladas x interpretadas
// Linguagem compilada
// Compilação:
// Programa fonte (código fonte) -> compilador (tradutor) -> Programa Objeto (assembly)
// A tradução é feita somente uma vez
// Gera um arquivo código aberto ou executável
// Execução:
// Dados de Entrada -> Programa objeto -> Saída

// Linguagem interpretada
// Execução:
// Programa fonte -> Interpretador -> Saída
// Dados de Entrada -> Interpretador -> Saída
// A tradução é feita toda vez que a aplicação é executada
// Nenhum arquivo ou código é gerado, somente a tradução instantânea

// Aula 06 - Hardware / Software

// Aula 07 - Lógica e Solução de Problemas
// Sequência de ações
// Obedecem a uma determinada ordem
// Estado inicial
// Período de tempo finito
// Resultados esperados e bem definidos
// = ALGORITMO 

// LÓGICA FORMAL
// Reconhecer contradições e eliminar possibilidades de erros
// Visa desenvolver a capacidade e discernimento: Identificar raciocínios válidos e não válidos
// Proposições:
// É uma frase
// Declarativa
// Recebe um valor lógico
// Ex: “Florianópolis é a capital de São Paulo”
// “A lua é o único satélite natural da Terra”
// Não-Proposições:
// Ex: “Tenha um bom dia”
// “O dia está bonito hoje”

// PRINCÍPIOS DA LÓGICA FORMAL
// Nem todo raciocínio é logico
// Para ser lógico são necessários 3 princípios:
// 1)	Principio da identidade: cada coisa é igual a si mesma
// Ex: Cadeira é uma cadeira

// 2)	Principio da não contradição: Uma proposição é VERDADEIRA ou FALSA, MAS NUNCA VERDADEIRA E FALSA AO MESMO TEMPO
// Ex: Pedro é medico 

// 3)	Principio do 3º excluído: Uma proposição é verdadeira ou falsa, não há uma terceira opção
// Ex: Maria está grávida

// LÓGICA MATEMÁTICA OU ÁLGEBRA BOOLEANA
// Utiliza símbolos e operações algébricas para representar proposições e suas inter-relações
// A lógica matemática trata do estudo das sentenças declarativas também conhecidas como proposições
// Proposição verdadeira possui valor lógico V (verdade) e uma proposição falsa possui valor lógico F (falso)
// Leis fundamentais da matemática lógica:
// 1)	Lei do meio excluído: Uma proposição é falsa (F) ou verdadeira (V): não há meio termo
// Ex: Cadeira é uma cadeira
// 2)	Principio da não contradição: Uma proposição não pode ser simultaneamente V e F 
// 3)	Princípio da funcionalidade: O valor lógico (V e F) de uma proposição composta é unicamente determinada pelos valores lógicos de suas proposições constituintes
// TABELA VERDADE (Proposições compostas)
// A tabela verdade é uma estrutura lógica que facilita o raciocínio humano. É utilizada por programadores como forma de facilitar a construção de algoritmos de programação
// O nome “tabela verdade” é apenas intuitivo. Ela é muito útil para representar as proposições e combinações entre elas (negação, conjunção e disjunção)
// Para todos os exemplos a seguir, vamos considerar duas proposições, p e q. Para cada operação(operador), será mostrada a tabela com explicações e exemplos.

// OPERADORES LÓGICOS
// Negação: O operador de negação quando aplicado a uma proposição faz com que o valor desta proposição inverta (INVERTE)
// Conjunção (E): O operador de conjunção requer que todas as partes de uma proposição composta sejam verdadeiros para que o resultado final da proposição seja verdadeiro. Caso haja uma falsidade, a sentença como um todo torna-se falsa (V e V)
// Disjunção (OU): O operador de disjunção requer que apenas uma das partes da proposição composta seja verdadeira para que o resultado final da proposição composta seja verdadeiro (Basta uma verdade para que o TODO seja Verdade, V ou F – F ou V)

// USO DA TABELA VERDADE USANDO OS OPERADORES LÓGICOS
 

// Aula 08 - Algoritmos
// Conjunto de regras e procedimentos lógicos perfeitamente definidos que levam à solução de um problema em um número finito de etapas
// Efetivo: Deve sempre resolve o que tem para solucionar antecipando falhas
// Bem Definido: Os passos devem ser definidos de modo a serem entendidos, não podem haver ambiguidades
// Finito: Deve eventualmente resolve o problema. Deve ter um início e um fim
// Completo: Deve prever todas as coisas que são necessárias para resolve o problema
// Ex: Ligar de um orelhão, tomar banho, ver um vídeo no Youtube, cozinhar ovos, tudo que fazemos no dia a dia é um algoritmo
// A ordem lógica de execução das tarefas é importante
// Todos algoritmos tem início e fim
// Um algoritmo tem que ser completo
// Um Algoritmo deve ter alto índice de detalhamento
// Cada tarefa ou etapa é chamado de instrução 

// Aula 09 - Resolução de Problemas
// Passo a passo
// Problema -> Solução do problema em forma de algoritmo (descritivo de tudo que tem que fazer - ex: pedir as notas, somar as médias, calcular a média, informar o resultado) -> codificação em uma linguagem de programação (transcrever o problema em linguagem de programação) -> Solução como programa de computador
// Dicas
// A melhor codificação será alcançada quanto melhor for o algoritmo que representa seu problema
// Se você passar direto do problema para a codificação, sem a solução em forma de algoritmos, certamente estará criando um outro problema e, nesse caso, você terá dois problemas para resolver
// O primeiro e o próprio problema inicial que você gostaria de estar resolvendo
// O segundo é o problema criado por você mesmo na codificação em uma linguagem de programação, onde você gastará horas tentando corrigir e fazer com que o mesmo resolve o seu problema inicial 

// Aula 10 - Representar um Algoritmo

// FLUXOGRAMA (mais visual, utiliza figuras geométricas)
// Representação gráfica do algoritmo onde formas geométricas diferentes implicam ações (instruções, comandos) distintos. Tal propriedade facilita o entendimento das ideias contidas nos algoritmos e justifica sua popularidade
// Oval: Início e fim do fluxograma
// Quadrado partido em cima: Operação de entrada de dados
// Quadrado com ondulação em baixo: Operação de saída de dados
// Quadrado: Operação de atribuição
// •	: Decisão (Condição)
// Booleano Se (V) / Senão (F)
// PSEUDOCÓDIGO (forma textual)
// Descrever o que tem que fazer, passando instrução para o computador
// Leia Nota1
// Leia Nota2
// Leia Nota3
// ...

// Aula 11 - Construindo um Algoritmo
// REGRAS DE CONSTRUÇÃO DO ALGORITMO
// Usar somente um verbo por frase
// Imaginar que você está desenvolvendo um algoritmo para pessoas que não trabalham com informática
// Usar frases curtas e simples
// Ser objetivo
// Usar palavras que não tenham sentido dúbio
// FASES DE CONSTRUÇÃO DO ALGORITMO
// Entrada de dados (informações solicitadas ao usuário) => processamento (procedimentos utilizados para chegar ao resultado final) => saída de dados (resultados obtidos pela fase de processamento)

// Aula 12 - Exercícios
// 1)	Faça um algoritmo que receba dois números e ao final mostre o resultado da soma dos dois números lidos;
 //Entrada de dados:
//   PrimeiroNumero
//   SegundoNumero

 //Processamento
//   Somar os dois numeros

 //Saída
//   O resultado da soma

// --------------------------------------
// Algoritmo:

 //Entrada de Dados:
// Ler(Leia) PrimeiroNumero
// Ler SegundoNumero

 //Processamento:
// soma = PrimeiroNumero + SegundoNumero

 //Saída:
// Escrever soma

// 2)	Faça um algoritmo para informar à Joãozinho se ele foi aprovado na matéria de Lógica para programação. Joãozinho fez 3 provas e a média necessária para ser aprovado é de 7;

// Faça um algoritmo para preparar um macarrão instantâneo. Parta do principio
// que você está na cozinha e deve prepará-lo e servi-lo.
// Escreva um algoritmo para determinar o consumo médio de um automóvel
// sendo fornecida a distância total percorrida pelo automóvel e o total de
// combustível gasto;
// Faça um algoritmo para realizar a tarefa de tomar banho;

// Aula 13 - Considerações Finais
