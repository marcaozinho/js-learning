function envelhecer(anos) {
    this.idade += anos;
}

function makePessoa(nome, idade) { 
  let pais = 'Brasil';
  const estado = { nome, idade, falar,  getPais, setPais, envelhecer: localEnvelhecer };
  
  function falar (palavras) {
    console.log(`${estado.nome} falou ${palavras}`);
  }
  
  function localEnvelhecer() {
    envelhecer.call(estado, 5);
  }
  
  function getPais() {
    return pais;
  }
  
  function setPais(value) {
    pais = value;
  }

  return estado;  
}


const cris = makePessoa("cris", 25);
const vinicius = makePessoa("vinicius", 30);

cris.envelhecer();
cris.envelhecer();
cris.setPais("Argentina");
console.log(cris.getPais());
console.log(cris);