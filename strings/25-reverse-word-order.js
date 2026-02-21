// Задача №25
// Задача: Перевернуть порядок слов
// reverseWordOrder("я люблю js")  // "js люблю я"

function reverseWordOrder(str) {
  return str.split(' ').reverse().join(' ');
}

console.log(reverseWordOrder('я люблю js'));
