/**
 * feat(hof): conditional callback execution (#4)
 *
 * 📋 Задача:
 * Написать функцию executeIf, которая принимает условие и функцию,
 * и вызывает функцию только если условие truthy.
 *
 * 💡 Ключевые идеи:
 * - if(value) проверяет на truthy а не строго на true
 * - 0, "", null, undefined, NaN — falsy значения
 * - альтернатива: value && fn() — короткое замыкание
 * - && возвращает первое falsy или последнее значение если все truthy
 *
 * ⚠️ Частые ошибки:
 * - value === true → не сработает для truthy значений типа 1 или "hello"
 * - fn(value)      → callback не ожидает аргументов
 */

function executeIf(value, fn) {
  if (value) {
    return fn();
  }
}

// --- Примеры ---

// truthy
executeIf(true, () => console.log('Executed!'));
// → "Executed!"

// falsy
executeIf(false, () => console.log('Executed!'));
// → ничего

// falsy values
executeIf(0, () => console.log('Executed!')); // → ничего
executeIf('', () => console.log('Executed!')); // → ничего
executeIf(null, () => console.log('Executed!')); // → ничего
