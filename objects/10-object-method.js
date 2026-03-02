//  Задача
// Создай объект , который будет содержать методы для базовых операций:
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return b !== 0 ? a / b : 'Ошибка: деление на ноль!';
  },
};
// Твоя цель:
// - Вызвать каждый метод и вывести результат в консоль.
// Например:
// console.log(calculator.add(5, 3)); // 8
// - Добавить новый метод square(n), который возвращает квадрат числа.
// - Попробовать вызвать его и проверить результат.

// 🎯 Дополнительный уровень (челлендж)
// - Добавь метод average(...nums), который принимает любое количество чисел и возвращает их среднее.

console.log(calculator.divide(10, 7));
console.log(calculator.multiply(10, 12));
console.log(calculator.subtract(111, 11));
console.log(calculator.add(50, 12112));

calculator.square = function (n) {
  return n * n;
};

console.log(calculator.square(20));

calculator.average = function (...nums) {
  if (!nums.length) return 0;
  return nums.reduce((acc, num) => acc + num, 0) / nums.length;
};

console.log(calculator.average(10, 10, 10, 10, 10));
console.log(calculator.average());

// calculator.square = n => n * n;
// calculator.average = (...nums) =>
//   nums.length ? nums.reduce((acc, num) => acc + num, 0) / nums.length : 0;
