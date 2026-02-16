// 1️⃣4️⃣ Задача
// Написать функцию, которая:
// принимает предложение
// возвращает самое длинное слово

// Пример:
// "Я люблю программирование"
// → "программирование"

// Алгоритм:
// Разбить строку на массив слов по пробелу
// Создать переменную longestWord = ''
// Пройти по каждому слову в массиве
// Если длина текущего слова больше, чем у longestWord → сохранить его
// После завершения цикла вернуть longestWord

const longestWordFor = (str) => {
  let longestWord = '';
  const words = str.split(' '); // получаем массив слов

  for (let i = 0; i < words.length; i++) {
    //сравниваем длину текущего слова с самым длинным найденным
    if (words[i].length > longestWord.length) {
      //заменяем
      longestWord = words[i];
    }
  }
  return longestWord;
};

// console.log(longestWordFor('I love programming'));

const longestWordReduce = (str) => {
  return str
    .split(' ')
    .reduce((acc, word) => (word.length > acc.length ? word : acc), '');
};
// split → получили массив слов
// acc → хранит самое длинное слово
// word → текущее слово
// console.log(longestWordReduce('I love programming'));
