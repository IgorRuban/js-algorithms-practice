/**
 * 📋 Задача:
 * Написать функцию pipeline, которая принимает начальное значение
 * и возвращает объект с методами pipe и value.
 * pipe применяет функцию и возвращает новый pipeline для цепочки.
 * value возвращает текущее значение.
 *
 * 💡 Ключевые идеи:
 * - pipeline возвращает объект с методами — паттерн Builder
 * - pipe возвращает pipeline(result) с новым значением — это позволяет цепочку
 * - value просто возвращает текущее значение через closure
 * - каждый вызов pipe создаёт новый pipeline с обновлённым значением
 *
 * ⚠️ Частые ошибки:
 * - return pipeline(value) вместо pipeline(result) → передаём старое значение
 * - return this.pipe() → возвращаем только метод а не весь объект
 * - не сохранить результат fn(value) → новое значение теряется
 */

function pipeline(value) {
  return {
    pipe: function (fn) {
      const result = fn(value); // применяем fn к текущему значению
      return pipeline(result); // создаём новый pipeline с новым значением
    },
    value: function () {
      return value; // возвращаем текущее значение через closure
    },
  };
}

// --- Примеры ---

const result = pipeline(3)
  .pipe((x) => x * 2)
  .pipe((x) => x + 1)
  .pipe((x) => x * x)
  .value();

console.log(result); // → 49

console.log(
  pipeline(10)
    .pipe((x) => x - 5)
    .pipe((x) => x * 3)
    .value(),
); // → 15
