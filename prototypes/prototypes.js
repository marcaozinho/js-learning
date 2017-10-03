<script type="text/javascript">
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade || 1;
}

Pessoa.prototype.falar = function(palavras) {
    console.log(this.nome + " fala: " + palavras);
};

Pessoa.prototype.envelhecer = function(anos) {
    this.idade += anos || 1;
    console.log(this);
};

const vinicius = new Pessoa('Vinicius', 25);

console.log(vinicius);

vinicius.envelhecer();	
</script>