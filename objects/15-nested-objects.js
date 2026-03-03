// Задача №15: Вложенные объекты
// Условие:
// Дан объект user = {name: 'Tom', address: {city: 'Paris', zip: 75001}}.
// Задание: Выведи город пользователя.

const user = { name: 'Tom', address: { city: 'Paris', zip: 75001 } };

user.address.country = 'France';

console.log(user.address.city);
console.log(user);

user.address.zip = 75002;

const updatedUser = { ...user, address: { ...user.address, zip: 75002 } };

const updatedUserCity = { ...user, address: { ...user.address } };

console.log(updatedUser);
console.log(updatedUserCity);

const data = {
  user: {
    profile: {
      contacts: {
        email: 'test@example.com',
      },
    },
  },
};

const {
  user: {
    profile: {
      contacts: { email },
    },
  },
} = data;

console.log(email);

console.log(user?.address?.street?.number ?? 'Номера нет');
