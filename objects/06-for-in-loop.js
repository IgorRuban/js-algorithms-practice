// 🎯 Уровень 1 → Задача №6
// Условие:
// Дан объект grades = {math: 90, english: 85, history: 88}.
// Задание: Выведи каждый предмет и оценку в формате: "math: 90", "english: 85", "history: 88".

const grades = { math: 90, english: 85, history: 88 };

for (const key in grades) {
  console.log(`${key}: ${grades[key]}`);
}
