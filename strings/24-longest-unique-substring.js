// Задача №24:
// Найти самую длинную подстроку без повторяющихся символов
// Задача: Найти самую длинную непрерывную подстроку, где все символы уникальны.

// Алгоритм (Sliding Window):
// 1. Используем "скользящее окно" (два указателя)
// 2. Расширяем окно вправо, добавляя символы
// 3. Если встретили дубликат — сдвигаем левую границу
// 4. Отслеживаем максимальную длину окна

// Способ : ✅ for + Set
function longestUnique(str) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    let char = str[right];

    // Пока символ есть в Set — удаляем слева
    while (set.has(char)) {
      set.delete(str[left]);
      left++;
    }

    // Добавляем текущий символ
    set.add(char);

    // Обновляем максимум
    maxLength = Math.max(maxLength, set.size);
  }

  return maxLength;
}

// Примеры:
console.log(longestUnique('abcabcbb')); // "abc" (длина 3)
console.log(longestUnique('bbbbb')); // "b" (длина 1)
console.log(longestUnique('pwwkew')); // "wke" (длина 3)
console.log(longestUnique('')); // "" (длина 0)
console.log(longestUnique('abcdef')); // "abcdef" (длина 6)
console.log(longestUnique('dvdf')); // "vdf" (длина 3)
