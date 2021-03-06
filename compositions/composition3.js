const pessoa = {
	andar(passos = 2) {
		console.log(`${this.nome} andou ${passos} passos`);
	}
};


function createPessoa(nome, idade) {
	return Object.create(pessoa, {
			nome: {
				value: nome,
			},
			idade: {
				value: idade,
			},
		});
}

const vinicius = createPessoa("Vinicius", 30);


console.log(vinicius);
vinicius.andar(33);