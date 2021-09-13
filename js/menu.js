function apareceMenu() {
	const nav = document.querySelector('[data-nav]');
	nav.classList.toggle('ativo');

}
const btnMenu = document.querySelector('[data-btnMenu]');

btnMenu.addEventListener('click', apareceMenu);