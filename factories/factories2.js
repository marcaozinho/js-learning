class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  
  falar(palavras) {
    console.log(`${this.nome} diz: ${palavras}`);
  }; 
}

function makePessoa(nome, idade = 1) {
  if (idade < 1) {
    idade = 1;
  } 
  return new Pessoa(nome, idade);  
}

const cris = makePessoa('Cris', 0);
console.log(cris);
cris.falar('opa');	