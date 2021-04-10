import { users } from "./users.js";

// MAP
// Traz um array com todos os nomes
const names = users.map(user => user.name);
console.log('Names', names);

// Traz um array com todas as idade
const ages = users.map(user => user.age);
console.log('Ages', ages);

// Traz um array de objeto e o gênero
const userGenders = users.map(user => ({
  name: user.name,
  gender: user.gender,
}));

console.log('userGenders', userGenders);

// Traz um array com o primeiro nome
const firstNames = users.map(user => ({
  firstName: user.name.split(' ')[0]
}))

console.log('firstNames', firstNames);
// Traz um array com o ultimo nome
const lastName = users.map(user => ({
  lastName: user.name.split(' ')[2]
}));
console.log('lastName', lastName);

// Traz um array com peso maior que 75
const weights = users.filter(user => user.weight >= 75)

console.log('weights greater than 75', weights);
