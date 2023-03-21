// //  fetch metoda (praxa unutar f-je da bude) je f-ja za prikupljanje podataka sa servera
// // praviti preko asihronih f-ja

// const getUsers = () => {
//   return fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error.message));
//   // .finally(() => setTimeout(getUsers,1000*60*5))
// };

// getUsers();

// 2. nacin
// Asihrona f-ja za prikupljanje podataka sa servera
// User sa datim id-jem

// const getUsers = async (id) => {
//   const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   const users = await data.json();
//   console.log(users);
// };

// getUsers(5);

// prikupiti sve Usere a nakon toga vratiti json sa svim userima koji su prikazani sa odredjenim svojstvima :
// id, nmae,usernmae,email(ispisan malim slovima),phone,addres sa svojstvima street i suite

const getUsers = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const users = await data.json();
  const mapUsers = users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email.toLowerCase(),
      phone: user.phone,
      addres: {
        street: user.address.street,
        suite: user.address.suite,
      },
    };
  });
  return mapUsers;
};

getUsers()
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
