function makePessoa(nome, idade) { 
  let pais = 'Brasil'; 
  const estado = { nome, idade, falar, envelhecer, getPais, setPais };
  
  function falar (palavras) {
    console.log(`${estado.nome} falou ${palavras}`);
  }
  
  function envelhecer(anos = 1) {
    estado.idade += anos;
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

cris.pais = "teste";
console.log(cris.pais);

console.log(cris.getPais());
cris.envelhecer();
cris.setPais("Argentina");
console.log(cris.getPais());
console.log(cris);