const vinicius = {name: "vinicius"}; 
const pessoa = vinicius; 
const amanda = "amanda";
vinicius.name = "luiz";
pessoa.name = "pessoa";
pessoa.sobrenome = "Reis";
console.log(amanda);
console.log(vinicius);
console.log(pessoa);	