function add(a, b) {
  return a + b;
}
const add10 = add.bind(undefined, 10);
const add99 = add.bind(undefined, 99);
console.log(add10(25));
console.log(add99(1));

function Pessoa(nome) {
  this.nome = nome;
  
  this.falar = function(palavras) {
    console.log(this.nome + " fala " + palavras);
  } 
}


function Homem(nome) {
  this.nome = nome;
}

const pessoa = new Pessoa("Nome pessoa");
const homem = new Homem("Nome homem");

homem.falar = pessoa.falar.bind(homem);
homem.falar("teste");	
