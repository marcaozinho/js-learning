class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  
  falar(palavras) {
    console.log(`${this.nome} diz: ${palavras}`);
  } 
}

const cris = new Pessoa('Cris', 25);
cris.falar('opa');	