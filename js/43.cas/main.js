// Jos jedan nacin pravljenja objekata: -->

const objectFunc = {
  incrementScore: function () {
    this.score += 1;
  },
};

function createUser(firstName, lastName, score) {
  const newUser = Object.create(objectFunc);
  newUser.firstName = firstName;
  newUser.lastName = lastName;
  newUser.score = score;
  return newUser;
}
const tarik = createUser("Tarik", "Ibrovic", 16);
console.log(tarik);

tarik.incrementScore();  // povecava za jedan od gornje f-je
console.log(tarik);
