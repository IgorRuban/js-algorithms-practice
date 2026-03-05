// Задача №20: Object.freeze()
// Условие:
// Создай объект config = {api: 'https://example.com'}.
// Задание: Заморозь его с помощью Object.freeze() и попробуй изменить — что произойдёт?

const config = { api: 'https://example.com' };
Object.freeze(config);

config.api = 'https://new-url.com';
config.newProp = 'test';
delete config.api;
console.log(Object.isFrozen(config));
console.log(config);

const settings = {
  api: 'https://example.com',
  options: { timeout: 5000 },
};
Object.freeze(settings);
settings.options.timeout = 9999;
console.log(settings);
//   | Операция                           | Обычный объект | `Object.seal()` | `Object.freeze()` |
// | ---------------------------------- | -------------- | --------------- | ----------------- |
// | Изменить значение свойства         | ✅ можно        | ✅ можно         | ❌ нельзя          |
// | Добавить новое свойство            | ✅ можно        | ❌ нельзя        | ❌ нельзя          |
// | Удалить свойство                   | ✅ можно        | ❌ нельзя        | ❌ нельзя          |
// | Изменить descriptor (configurable) | ✅ можно        | ❌ нельзя        | ❌ нельзя          |

const user1 = { name: 'Igor' };

user1.name = 'Alex'; // можно
user1.age = 25; // можно
delete user1.name; // можно

const user2 = { name: 'Igor' };

Object.seal(user2);

user2.name = 'Alex'; // ✅ можно
user2.age = 25; // ❌ нельзя
delete user2.name; // ❌ нельзя

const user3 = { name: 'Igor' };

Object.freeze(user3);

user3.name = 'Alex'; // ❌ нельзя
user3.age = 25; // ❌ нельзя
delete user3.name; // ❌ нельзя
