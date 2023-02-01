// 10.zadatak (w3resources)

let library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];
console.log(library);
let sortedProducts = library.sort((p1, p2) =>
  p1.libraryID < p2.libraryID ? 1 : p1.libraryID > p2.libraryID ? -1 : 0
);
console.log(sortedProducts);
