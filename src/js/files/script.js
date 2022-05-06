// Подключение функционала "Чертогов Фрилансера"
import {
	isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
	flsModules
} from "./modules.js";

window.onload = function () {
	document.body.classList.add('loaded_hiding');
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
	}, 500);
}