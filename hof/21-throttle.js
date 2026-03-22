/**
 * 📋 Задача:
 * Написать функцию throttle, которая принимает функцию и интервал.
 * Возвращает новую функцию — fn вызывается не чаще одного раза за limit мс.
 *
 * 💡 Ключевые идеи:
 * - isBlocked живёт внутри throttle снаружи возвращаемой функции — closure
 * - если isBlocked === true — просто игнорируем вызов через return
 * - fn вызывается сразу, потом блокируем isBlocked = true
 * - через limit мс разблокируем isBlocked = false через setTimeout
 *
 * ⚠️ Частые ошибки:
 * - вызывать fn через setTimeout → fn должна выполниться сразу
 * - забыть isBlocked = true → блокировка не работает
 * - setTimeout(isBlocked = false) → выполняется сразу а не через limit
 *
 * 🔄 Отличие от debounce:
 * - debounce — откладывает вызов, выполняет после паузы
 * - throttle — выполняет сразу, блокирует повторные вызовы на limit мс
 */

function throttle(fn, limit) {
  // флаг блокировки
  let isBlocked = false;

  return function (arg) {
    if (isBlocked === true) {
      return; // игнорируем вызов если заблокировано
    }

    fn(arg); // вызываем fn сразу
    isBlocked = true; // блокируем повторные вызовы
    setTimeout(() => (isBlocked = false), limit); // через limit мс разблокируем
  };
}

// --- Примеры ---

const log = throttle(() => console.log('Вызов!'), 300);

log(); // → 'Вызов!'
log(); // игнорируется
log(); // игнорируется
// через 300мс
log(); // → 'Вызов!'
