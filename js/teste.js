function verificarSenha() {
	var senha = document.querySelector('[data-senha]');
	var resultado = document.querySelector('[data-resultado]');

	var inSenha = senha.value;

	var erros = [];

	if (inSenha.length < 8 || inSenha.length > 15) {
		erros.push("possuir entre 8 e 15 caracteres");
	}

	if (!inSenha.match(/[a-z]/g)) {
		erros.push("possuir letras minusculas (no mínimo, 1)");
	}

	if (!inSenha.match(/[\W|_]/g)) {
		erros.push("possuir simbolos (no mínimo, 1)");
	}

	if (erros.length == 0) {
		resultado.textContent = "Senha valida!";
	} else {
		resultado.textContent = "Erro... A senha deve " + erros.join(", ");
	}
}

	var btVerificar = document.querySelector('[data-btVerificar]');
	btVerificar.addEventListener("click", verificarSenha);