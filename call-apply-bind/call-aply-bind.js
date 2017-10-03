const cachorro = {
  nome: 'Punk',
  idade: 5,
  idadeCanina() { 
    return this.idade * 7;
  },  //métodos de objetos ecma6.
  falar(vezes = 2, text = "auau") {
    for (let i = 0; i < vezes; i++ ) {
      console.log(`${this.nome} falou: ${text}`);
    }
  }
};

const pessoa = {
  nome: "Vinicius",
  idade: 29,
  falar(palavras) {
    console.log(`${this.nome} falou: ${palavras}`);
  },

}

pessoa.latir = cachorro.falar.bind(pessoa, 77);

pessoa.latir();

