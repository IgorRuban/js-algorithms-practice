/**
 * 📋 Задача:
 * Написать функцию debounce, которая принимает функцию и задержку.
 * Возвращает новую функцию — fn выполнится только после последнего
 * вызова через delay миллисекунд.
 *
 * 💡 Ключевые идеи:
 * - timerId живёт внутри debounce но снаружи возвращаемой функции — closure
 * - clearTimeout(timerId) отменяет предыдущий таймер при каждом новом вызове
 * - setTimeout(() => fn(arg), delay) запускает fn только после паузы
 * - () => fn(arg) нужна чтобы передать fn без немедленного вызова
 *
 * ⚠️ Частые ошибки:
 * - setTimeout(fn(arg), delay) → fn вызывается сразу а не через delay
 * - забыть clearTimeout → таймеры накапливаются и fn вызывается много раз
 * - clearInterval вместо clearTimeout → не та функция
 */

function debounce(fn, delay) {
  // сохраняем id таймера между вызовами
  let timerId;

  return function (arg) {
    clearTimeout(timerId); // отменяем предыдущий таймер
    timerId = setTimeout(() => fn(arg), delay); // запускаем новый таймер
  };
}

// --- Примеры ---

const log = debounce(() => console.log('Вызов!'), 300);

log(); // сброс таймера
log(); // сброс таймера
log(); // через 300мс → 'Вызов!'
