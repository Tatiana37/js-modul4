//  1

// //  теория (Функция как значение)
// function greet(name) {
//   return `Добро пожаловать ${name}.`;
// }

// /* Вызываем функцию greet 
//    и выводим результат в консоль */
// console.log(greet('Манго'));
// // Добро пожаловать Манго.

// /* Выводим функцию greet 
//    в консоль не вызывая её */
// console.log(greet);
// /* 
// ƒ greet() { 
//      return `Добро пожаловать ${name}.`; 
// } 
// */

// задача

// // Дополни код так, чтобы в переменной result
// // был результат выполнения функции makePizza,
// // а в переменной pointer была ссылка на функцию makePizza.

// function makePizza() {
//   return 'Ваша пицца готовится, ожидайте.';
// }
// // Пиши код ниже этой строки

// const result = (makePizza());
// const pointer = (makePizza);

// console.log(result);
// console.log(pointer);


// ================================================

//  2 

//  теория (Колбэк-функции)

// Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// console.log(registerGuest('Манго', greet));

//  задача
// Дополни функцию makeMessage так, чтобы она ожидала вторым
// параметром(параметр callback) колбэк - функцию
// и возвращала ее вызов.Функция deliverPizza или makePizza
// будет передаваться как колбэк и ожидать аргументом имя
// готовой доставляемой пиццы.

// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// // Пиши код ниже этой строки
// function makeMessage(pizzaName, callback) {
  
//   return callback(pizzaName);
// }
// // console.log(makeMessage('Роял гранд', makePizza)); // Пицца Роял гранд готовится, ожидайте...
// console.log(makeMessage('Ультрасыр', deliverPizza)); // Доставляем пиццу Ультрасыр.


//  3

//  теория (Инлайн-колбэки)
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest("Манго", function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Поли", function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

//  задача
// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza('Ультрасыр', function eatPizza(pizzaName)
// {console.log(`'Едим пиццу ${pizzaName}'`);
// });


