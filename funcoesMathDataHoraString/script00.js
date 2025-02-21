//2. Funções em JavaScript (Matemáticas, Data e Hora, e Manipulação de Strings)

//2.1 Funções Matemáticas em JavaScript

//Raiz quadrada e Potência
console.log(Math.sqrt(25)); //Retorna 5 (raiz de 25)
console.log(Math.pow(2, 3)); //Retorna 8 (2**3)
console.log(Math.pow(4, 0.5)); //Raiz Quadrada
console.log(Math.pow(27, 1/3)); //Raiz cubica

//Arredondamento
console.log(Math.round(4.7)); //Retorna 5 (arredonda ao numero inteiro mais próximo)
console.log(Math.ceil(4.1)); //Retorna 5 (arredonda pra cima)
console.log(Math.floor(4.9)); //Retorna 4.9(arredonda pra baixo)

//Números aleatórios
console.log(Math.random()); //Retorna um número decimal entre 0 e 1
console.log(Math.floor(Math.random() * 10) + 1); //Retorna um número aleatório entre 1 e 10

console.log(Math.round(Math.random()*10)+30);
console.log(Math.round(Math.random()*50)+50);


//Valor absoluto, mínimo e máximo
console.log(Math.abs(-10)); //Retorna 10 (valor absoluto)
console.log(Math.min(5, 2, 9, 3)); //Retorna 2 (menor valor da lista)
console.log(Math.max(5, 2, 9, 3)); //Retorna (maior valor da lista)