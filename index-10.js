"use strict";

/*
 * =================
 *   START OF HW-10
 * =================
 *
 * HERE IS NO MARKUP.
 *
 *
 */

/* TASK 1 */
const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ["кіт", "собака", "миша", "папуга", "хомяк"];

// Функція countItems тут
const countItems = (arr, condition) => {
  let count = 0;
  for (let item of arr) {
    if (condition(item)) {
      count += 1;
    }
  }

  return count;
};

// Умови для перевірки:
const isEven = (num) => num % 2 === 0;
const isLarge = (num) => num > 10;
const isShort = (word) => word.length <= 3;

// Тестування
console.log("Парних чисел:", countItems(numbers, isEven)); // O: 3
console.log("Чисел більше 10:", countItems(numbers, isLarge)); // O: 3
console.log("Коротких слів:", countItems(words, isShort)); // O: 1

/* TASK 2 */
// Функція calculate тут
const calculate = (a, b, callback) => {
  return callback(a, b);
};

// Стрілкові функції для операцій тут
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : "Error: Cannot divide on zero");

// Тестування
console.log(calculate(10, 5, add)); // Повинно показати 15
console.log(calculate(10, 5, subtract)); // Повинно показати 5
console.log(calculate(10, 5, multiply)); // Повинно показати 50
console.log(calculate(10, 5, divide)); // Повинно показати 2
console.log(calculate(10, 0, divide)); // Повинно показати помилку

/* TASK 3 */
const repeatMessage = (times, messageCreator) => {
  for (let i = 0; i < times; i++) {
    messageCreator(i);
  }
};

repeatMessage(5, (i) => console.log(`Square of ${i} is ${i * i}`));

/*
 * ===============
 *   END OF HW-9
 * ===============
 */
