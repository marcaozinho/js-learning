function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade || 1;
}

Pessoa.prototype.falar = function(palavras) {
    console.log(this.nome + " fala: " + palavras);
};

Pessoa.prototype.envelhecer = function(anos) {
    this.idade += anos || 1;
    console.log(this);
};

function Homem(nome, idade) {
  Pessoa.call(this, nome, idade);
  // Pessoa.apply(this, arguments);
  this.sexo = 'masculino';
}

Homem.prototype = new Pessoa();
Homem.prototype.caminhar = function(passos) {
  console.log(this.nome + ' caminhou ' + passos + ' passos');
}

//Observar
const vinicius = new Homem('Vinicius', 25);
const cris = new Pessoa('Cris', 25);

console.log(vinicius.idade);

delete vinicius.idade;
console.log(vinicius.idade);

console.log(vinicius.sexo);
delete vinicius.sexo;
console.log(vinicius.sexo);
vinicius.sexo = "teste";
console.log(vinicius.sexo);


vinicius.caminhar(33);
cris.caminhar(33);