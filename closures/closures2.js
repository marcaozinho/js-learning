function Pessoa(nome, idade, senha) {
  this.nome = nome;
  this.idade = idade;
  this.verificaSenha = function(value) {
    return value==senha;
  }
}

const vinicius = new Pessoa('Vinicius', 29, '123mudar');

console.log(vinicius);
// console.log(vinicius.senha); //undefined
vinicius.senha = "123";
console.log(vinicius.senha);
console.log(vinicius.verificaSenha('123mudar'));
</script>