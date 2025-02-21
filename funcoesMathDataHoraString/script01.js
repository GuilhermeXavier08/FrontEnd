//2.2 Funções de Data e Hora

//Criando um objeto de Data
let agora = new Date();
console.log(agora); //Retorna data e hora atual

//Formatando Data e Hora
console.log(agora.toDateString()); //Retorna a data no formato abreviado (ex: "Wed Feb 07 2025")
console.log(agora.toLocaleDateString()); //Retorna a data formatada conforme o local (ex: "07/02/2025" no Brasil)
console.log(agora.toLocaleTimeString()); //Retorna apenas a hora formatada

//Obtendo Partes de uma Data
console.log(agora.getFullYear()); //Retorna o ano (ex: 2025)
console.log(agora.getMonth()); //Retorna o mês (ex: 0 = janeiro, 1 = fevereiro etc)
console.log(agora.setMonth(11)); //Define mês para dezembro (janeiro = 0)
console.log(agora.getMonth()); //Retorna 11
console.log(agora.getDay()); // Retorna o dia da semana (0 = Domingo, 1 = Segunda, etc.)

agora.setDate(25); //Define o dia do mês para 25
console.log(agora.getDate()); //Retorna 25

//Calculo diferença das datas
let data1 = new Date();
let data2 = new Date("2025-12-25");
let diferenca = data2 - data1; // Retorna a diferença em milissegundos

let dias = diferenca / (1000 * 60 * 60 * 24); // Converte para dias
console.log(`Diferença entre as datas: ${dias} dias`);
