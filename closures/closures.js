function Pessoa(nome, idade, senha) {
  this.nome = nome;
  this.idade = idade;
  this.senha = senha;
  this.verificaSenha = function(senha) {
    return senha==this.senha;
  }
}

const vinicius = new Pessoa('Vinicius', 29, '123mudar');

console.log(vinicius);
vinicius.senha="123";
console.log(vinicius.verificaSenha('123mudar'));
