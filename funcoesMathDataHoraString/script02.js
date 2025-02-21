let texto = "Aula de JavaScript";

//Contagem dos caracteres (lenght)
console.log(texto.length);

//Maiúscula e Minúsculas
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

//Partes da String
console.log(texto.substring(0,4));
console.log(texto.slice(-10));

//substituir texto
let novoTexto = texto.replace('Java','Type');
console.log(novoTexto);

//trim (tesoura)
let textoEspaco = " JavaScript ";
let textoCortado = textoEspaco.trim();
console.log(textoEspaco);
console.log(textoCortado);

//split (separação)
let linguagem = "JavaScript, Python, PHP, C++, Java";
let linguagemArray = linguagem.split(", ");
console.log(linguagem);
console.log(linguagemArray);
