// const caminhante = {
// 	andar(passos = 2) {
// 		console.log(`${this.nome} andou ${passos} passos`); //esperam this.nome
// 	},
// 	correr(passos = 30) {
// 		console.log(`${this.nome} correu ${passos} passos`);
// 	}
// };

// const falante = {
// 	falar(palavras) {
// 		console.log(`${this.nome} falou ${palavras} palavras`);
// 	},
// 	gritou(palavras) {
// 		console.log(`${this.nome} gritou ${palavras} palavras`);
// 	}
// };


// const puck = Object.assign({nome: 'puck'}, caminhante);
// const vinicius = Object.assign({nome: 'vinicius'}, caminhante, falante);

// console.log(puck);
// console.log(vinicius);

// puck.andar();
// vinicius.gritou(6);

const logavel = {
	log(value) {
		console.log(value);
	}
};

const emissorDeEventos = Object.assign({
	emitir(evento) {
		this.log(`evento: ${evento}`);
	}
}, logavel);


const conta = Object.assign({}, emissorDeEventos);

conta.emitir('ola');
conta.log('oi');