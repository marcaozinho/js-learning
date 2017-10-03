class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  
  falar(palavras) {
    console.log(`${this.nome} diz: ${palavras}`);
  }; 
}

Pessoa.fake = function(nome, idade = 1) { 
  if (idade < 1) {
    idade = 1;
  }
  return new Pessoa(nome, idade);  
}

Pessoa.prototype.log = function() {
  console.log(this);
}

const cris = Pessoa.fake('Cris', 0);

cris.log();
console.log(cris);
cris.falar('opa');