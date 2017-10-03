const vinicius = {name: "vinicius"};
const pessoa = JSON.parse(JSON.stringify(vinicius));
const amanda = "amanda";

vinicius.name = "luiz";
pessoa.name = "pessoa";
pessoa.sobrenome = "Reis";

var sayMyName = function (person) {
  console.log(person.name)
} 

sayMyName(vinicius);
sayMyName(pessoa);

console.log(amanda);
console.log(vinicius);
console.log(pessoa);	