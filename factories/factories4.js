// //factories simples e puras, sem funções construtoras
// //criando objeto literal, puro.
// function makePessoa(nome, idade) {
//   function falar (palavras) {
//     console.log(`${nome} falou ${palavras}`);
//   }
  
//   function envelhecer(anos = 1) {
//     idade += anos;
//     console.log(idade);
//   }
//   // return {nome: nome, idade: idade};
//   return {nome, idade, falar, envelhecer};
// }

// const cris = makePessoa("cris", 25);
// cris.nome = "teste";
// cris.falar("precisa passar no retorno"); //prestar atencao
// console.log(cris.nome); //prestar atencao
// cris.envelhecer();
// cris.envelhecer(88);
// cris.envelhecer();

// console.log(cris);

// cris.falar("precisa passar no retorno");

// ---------------------------- 

function makePessoa(nome, idade) {
  
  let pais = 'Brasil';
  const estado = { nome, idade, falar, envelhecer };
  
  function falar (palavras) {
    console.log(`${estado.nome} falou ${palavras}`);
  }
  
  function envelhecer(anos = 1) {
    estado.idade += anos;
  }
  
  return estado;  
}

const cris = makePessoa("cris", 25);
const vinicius = makePessoa("vinicius", 30);

cris.envelhecer();

console.log(cris);
console.log(vinicius);	