const pessoa = {
	andar(passos = 2) {
		console.log(`${this.nome} andou ${passos} passos`);
	}
};

const vinicius = Object.create(pessoa, {
	nome: {
		value: 'vinicius',
		writable: true,
	},
	idade: {
		value: 25,
	},
});

vinicius.nome = "marcus";
console.log(vinicius);
vinicius.andar(33);