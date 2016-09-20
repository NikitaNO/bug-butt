let toggleClass = (blockId, classForToggle) => {
	let block = document.getElementById(blockId);
	block.classList.toggle(classForToggle);
}

let toggleMenu = () => {
	toggleClass('nav-menu', 'nav-menu_active');
	toggleClass('content', 'move-left');
}