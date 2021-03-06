const logavel = {
	log(value) {
		console.log(value);
	}
};

const emissorDeEventos = Object.assign({
	emitir(evento) {
		this.log(`evento: ${evento}`);
	}
});


function makeConta(obj = {}) {
	return Object.assign({}, emissorDeEventos, logavel);
}

const conta = makeConta();

console.log(conta);
conta.emitir('ola');
conta.log('oi');	