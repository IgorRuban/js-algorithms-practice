// Задача №21: Глубокое копирование объекта
// Условие:
// Дан объект с вложенностью: original = {a: 1, b: {c: 2}}.
// Задание: Создай глубокую копию (deep copy), чтобы изменение копии не влияло на оригинал.

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
const original = { a: 1, b: { c: 2 } };
const copy = deepCopy(original);

copy.b.c = 999;

// console.log(original.b.c); // должно быть 2
// console.log(copy.b.c); // 999

function deepCopyRecursive(obj, map = new WeakMap()) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj);
  }

  if (map.has(obj)) {
    return map.get(obj);
  }

  const copy = Array.isArray(obj) ? [] : {};

  map.set(obj, copy);

  for (const [key, value] of Object.entries(obj)) {
    copy[key] = deepCopyRecursive(value, map);
  }

  return copy;
}

const user = {
  name: 'Igor',
  address: {
    city: 'Dnipro',
  },
  skills: ['JS', 'React'],
};

const clone = deepCopyRecursive(user);

clone.address.city = 'Kyiv';

// console.log(user.address.city); // Dnipro

const obj = {
  date: new Date(),
  func: () => 'hello',
  undef: undefined,
  symbol: Symbol('test'),
  nan: NaN,
  infinity: Infinity,
};

const copy1 = JSON.parse(JSON.stringify(obj));
// console.log(copy1); //{ date: '2026-03-05T19:50:05.312Z', nan: null, infinity: null }

const obj1 = {
  created: new Date(),
  user: { name: 'Bob' },
};

const copy3 = deepCopyRecursive(obj1);
console.log(copy3.created); // 2026-03-05T20:00:27.898Z

const obj11 = { a: 1 };
obj11.self = obj11;

const copy22 = deepCopyRecursive(obj11);

console.log(copy22.self === copy22); // true

const data = {
  users: [
    { id: 1, profile: { name: 'Anna', settings: { theme: 'dark' } } },
    { id: 2, profile: { name: 'Bob', settings: { theme: 'light' } } },
  ],
  config: {
    api: { url: 'https://example.com', timeout: 5000 },
  },
};

const copy33 = deepCopyRecursive(data);
copy33.users[0].profile.settings.theme = 'blue';

console.log(data.users[0].profile.settings.theme); // 'dark'
console.log(copy33.users[0].profile.settings.theme); // 'blue'
