// 🎯 Задача №18: Найти самую длинную последовательность одинаковых элементов
// Реальный кейс: Анализ серий побед/поражений в играх, поиск повторяющихся паттернов в данных.

// Условие:
// Напиши функцию findLongestSequence(arr), которая возвращает объект с информацией о самой длинной последовательности одинаковых элементов:
// value — значение элемента
// length — длина последовательности

function findLongestSequence(arr) {
  if (arr.length === 0) return { value: null, length: 0 };

  let currentValue = arr[0];
  let currentLength = 1;

  let maxValue = arr[0];
  let maxLength = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === currentValue) {
      // продолжаем текущую последовательность
      currentLength++;
    } else {
      // проверяем: текущая > максимальной?
      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxValue = currentValue;
      }

      // начинаем новую последовательность
      currentValue = arr[i];
      currentLength = 1;
    }
  }

  // проверяем последнюю последовательность
  if (currentLength > maxLength) {
    maxLength = currentLength;
    maxValue = currentValue;
  }

  return { value: maxValue, length: maxLength };
}

// Тесты:
console.log(findLongestSequence([1, 1, 2, 2, 2, 3]));
// { value: 2, length: 3 }

console.log(findLongestSequence(['a', 'a', 'a', 'b', 'b']));
// { value: 'a', length: 3 }

console.log(findLongestSequence([1, 2, 3, 4]));
// { value: 1, length: 1 }

console.log(findLongestSequence([5, 5, 5, 5, 5]));
// { value: 5, length: 5 }
