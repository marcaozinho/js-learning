var CONFIG = {
	host: "https://google.com",
};

var nome = "Cris";

function init() {
  var nome = "Vinicius";
  CONFIG.nome = nome; 
  console.log(CONFIG, nome);
};

console.log(nome);
console.log(CONFIG);

init();

console.log(nome);
console.log(CONFIG);	
