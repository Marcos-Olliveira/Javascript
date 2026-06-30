



//array de strings
//contém apenas textos envolvidos por aspas,
//muito utilizado para listagem de nomes, categorias ou opções de menus
const frutas = ["laranja","maça","limão","goiaba"];

//array de números
//contém apenas números inteiros, 
//É ideal para contagens de idades, anos e ID de banco de dados
const números = [20,10,30,3,5];

//array de valores boleanos (booleans)
//armazena apenas estados bínarios (true para verdadeiro, false para falso).
//Útil para salvar o resultado de uma lista de checagens ou permissões.
const booleans = [true, false, true, false, false, true];

//arrays de números decimais (Float/Doubles)
//armazena números quebrados(com casas decimais)
//lembre-se que programação usamos (.) em vez de vírgula para separar os centavos
const decimais = [19.90, 20.40, 2.75, 4.95, 10.00];

//array misto
//mistura texto, número inteiro, booleano, decimal na mesma lista
//Embora permitido em linguagens como Javascript e Pithon, não é recomendado para listas longas
//pq dificulta a automação de leituras
const dadosUsuario = ["Carlos", 28, true, 75.5];

//array de objetos (objetos complexos)
//É o modelo mais usado na web, cada item na lista é um objeto completo com suas proprias propriedades.
//É o formato padrão de dados que o seu navegador recebe de um servidor (formato JSON)
const produtos = [
    {id:1, nome:"camiseta", preço:49.90},
    {id:2, nome:"shorts", preço:29.90},
    {id:3, nome:"meias", preço:19.90}
];

//Array de arrays (Matriz bidimensional)
//Uma lista que contém outras listas dentro dela. É a estrutura perfeita
//para representar tabelas (linhas e colunas), tabuleiros de jogos ou coordenadas geograficas (latitude e longitude)
const tabuleiro = [
    ["x","0","x"],
    ["0","x","0"],
    ["x","x","0"]
];

//array de funções
//Armazena código executáveis (funções). Permite que vc mude o comportamento
//de um sistema dinamicamente, escolhendo qual função da lista disparar
const operacoes = [
    (a,b)=> a + b,
    (a,b)=> a - b,
    (a,b)=> a * b
];

//Array com elementos Vazios ou Nulos
//Utiliza a palavra-chave null (ou undefined) de forma intencional para indicar que uma
//posição especifica da lista está vazia ou sem valor definido no momento.
const vagas_estacionamento = ["ocupado", null,"ocupado", null, "ocupado"]


//Array de Datas (date Objects)
//Guarda instâncias de tempo especificas. Essencial para criar cronogramas, historicos
//de atualizações ou sistema de agendamento de tarefas
const dataEntregas = [
    new Date("2026-07-21"),
    new Date("2026-07-22"),
    new Date("2026-07-23")
]