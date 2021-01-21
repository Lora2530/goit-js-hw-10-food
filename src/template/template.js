import foodTemplate from '../template/food.hbs';
import menu from '../menu.json';

const markup = foodTemplate(menu);
console.log(markup);

const foodRef = document.querySelector('.js-menu');

foodRef.insertAdjacentHTML('afterbegin', markup);