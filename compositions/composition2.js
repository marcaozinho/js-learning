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
	sobrenome: {
		value: 'leite',
		writable: true,
	},
	nome_completo: {
		get() {
			return `${this.nome} ${this.sobrenome}`;
		},
		set(valor) {
			this.nome = valor;
		}
	},
	idade: {
		value: 25,
	},
});

vinicius.nome_completo = "marcus";

console.log(vinicius);
vinicius.andar(33);