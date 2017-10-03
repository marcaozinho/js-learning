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
  this.sexo = 'masculino';
}
Homem.prototype = Pessoa.prototype;
Homem.prototype.caminhar = function(passos) {
  console.log(this.nome + ' caminhou ' + passos + ' passos');
}
//Observar
const vinicius = new Homem('Vinicius', 25);
const cris = new Pessoa('Cris', 25);
console.log(vinicius);
vinicius.envelhecer();
vinicius.caminhar(33);
console.log(cris);
cris.envelhecer();
cris.caminhar(32);