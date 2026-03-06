// Задача №22: Группировка массива объектов
// Условие:
// Дан массив:
// [
//   {name: 'Anna', age: 25},
//   {name: 'Bob', age: 25},
//   {name: 'Carl', age: 30}
// ]
// Задание: Сгруппируй по возрасту.
// Ожидаемый результат:
// {
//   25: [
//     {name: 'Anna', age: 25},
//     {name: 'Bob', age: 25}
//   ],
//   30: [
//     {name: 'Carl', age: 30}
//   ]
// }

function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    // 1. Получаем значение ключа группировки из текущего объекта
    const groupKey = item[key];

    // 2. Если группа ещё не существует — создаём пустой массив
    //    Если группа уже есть — используем существующий массив
    acc[groupKey] = acc[groupKey] ?? [];

    // 3. Добавляем текущий объект в группу
    acc[groupKey].push(item);

    // 4. Возвращаем аккумулятор для следующей итерации
    return acc;
  }, {}); // Начинаем с пустого объекта
}

const users = [
  { name: 'Anna', age: 25 },
  { name: 'Bob', age: 25 },
  { name: 'Carl', age: 30 },
];

// console.log(groupBy(users, 'age'));

function groupByFn(arr, fn) {
  return arr.reduce((acc, item) => {
    const groupKey = fn(item);

    acc[groupKey] = acc[groupKey] ?? [];
    acc[groupKey].push(item);
    return acc;
  }, {});
}

// console.log(groupByFn(users, (user) => (user.age > 25 ? 'old' : 'young')));
// {
//   young: [{name: 'Anna', age: 25}, {name: 'Bob', age: 25}],
//   old: [{name: 'Carl', age: 30}]
// }

// groupByFn(users, user => user.name[0]);
// {
//   A: [{name: 'Anna', age: 25}],
//   B: [{name: 'Bob', age: 25}],
//   C: [{name: 'Carl', age: 30}]
// }

function groupByMultiple(arr, keys) {
  return arr.reduce((acc, item) => {
    // 1. Получаем значения всех указанных ключей из текущего объекта
    // 2. Объединяем их в строку через разделитель '-'
    const groupKey = keys.map((key) => item[key]).join('-');

    // 3. Если группа ещё не существует — создаём пустой массив
    acc[groupKey] = acc[groupKey] ?? [];

    // 4. Добавляем текущий объект в группу
    acc[groupKey].push(item);

    // 5. Возвращаем аккумулятор
    return acc;
  }, {});
}

const data = [
  { name: 'Anna', age: 25, city: 'Paris' },
  { name: 'Bob', age: 25, city: 'London' },
  { name: 'Carl', age: 30, city: 'Paris' },
];

// console.log(groupByMultiple(data, ['age', 'city']));

function groupByAndMap(arr, key, mapFn) {
  return arr.reduce((acc, item) => {
    // 1. Получаем ключ группы (как в обычном groupBy)
    const groupKey = item[key];

    // 2. Создаём массив для группы, если его нет
    acc[groupKey] = acc[groupKey] ?? [];

    // 3. ОТЛИЧИЕ: добавляем НЕ весь объект, а результат функции mapFn
    acc[groupKey].push(mapFn(item));
    //                 ^^^^^^^^^^^^^
    //                 преобразуем объект перед добавлением

    // 4. Возвращаем аккумулятор
    return acc;
  }, {});
}

function groupByCount(arr, key) {
  return arr.reduce((acc, item) => {
    // 1. Получаем ключ группы
    const groupKey = item[key];

    // 2. ОТЛИЧИЕ: вместо массива храним СЧЁТЧИК
    //    Если ключа нет — начинаем с 0, потом +1
    //    Если ключ есть — увеличиваем на 1
    acc[groupKey] = (acc[groupKey] ?? 0) + 1;
    //              ^^^^^^^^^^^^^^^^^^^
    //              если нет — 0, если есть — текущее значение

    // 3. Возвращаем аккумулятор
    return acc;
  }, {});
}

function groupProductsByCategory(products) {
  return (
    products
      // 1. ФИЛЬТРАЦИЯ: оставляем только товары в наличии
      .filter((product) => product.inStock === true)

      // 2. ГРУППИРОВКА с преобразованием
      .reduce((acc, product) => {
        // 2.1. Получаем ключ группы (категория)
        const groupKey = product.category;

        // 2.2. Создаём массив для категории, если его нет
        acc[groupKey] = acc[groupKey] ?? [];

        // 2.3. ПРЕОБРАЗОВАНИЕ: добавляем только {name, price}
        //      вместо всего объекта
        acc[groupKey].push({
          name: product.name,
          price: product.price,
        });

        // 2.4. Возвращаем аккумулятор
        return acc;
      }, {})
  );
}
