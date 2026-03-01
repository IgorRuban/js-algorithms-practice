// 🎯 Уровень 1 → Задача №5
// Условие:
// Дан объект book = {title: 'JS Guide', pages: 300}.
// Задание: Проверь, есть ли свойство author. Если нет — добавь его со значением 'Unknown'.

const book = { title: 'JS Guide', pages: 300 };

if (!('author' in book)) {
  book.author = 'Unknown';
}

console.log(book);

// Способ 2 (через hasOwnProperty):
if (!book.hasOwnProperty('author')) {
  book.author = 'Unknown';
}

// Способ 3 (через проверку на undefined):
if (book.author === undefined) {
  book.author = 'Unknown';
}
