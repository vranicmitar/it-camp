// // // console.dir(document); // prikazuje vise stvari clg.dir

// // console.log(document.domain);
// // console.log(document.title);

// // let title = document.title;
// // title = `New Title`;
// // console.log(title);

// // console.log(document.body);
// // console.log(document.all);

// // const headerTitle = document.all[10];
// // console.log(headerTitle);

// // headerTitle.textContent = `new logo`;

// // headerTitle.innerHTML = `<h1> new logo </h1>`;

// // console.log(document.links);
// // console.log(document.images);

// // GET ELEMENT BY ID

// const headerTitle = document.getElementById("logo");
// console.log(headerTitle);

// headerTitle.innerHTML = "<em> New logo </em>";

// // PROMENA STILOVA

// headerTitle.style.borderBottom = `solid 3px #000`;

// // GET ELEMENTS BY CLASS NAME

// let containers = document.getElementsByClassName(`main`);

// const container = containers[0];
// container.style.backgroundColor = `red`;
// container.style.border = `10px solid blue`;

// // GET ELEMENT BY TAG NAME

// const listItems = document.getElementsByTagName("li");
// // console.log(listItems); ---> NE RADI

// // for (i = 0; i < listItems.length; i++) {
// //   if (i === 1) {
// //     listItems[i].style.color = `white`;
// //   } else listItems[i].style.color = `yellow`;
// // }

// // QUERY SELECTOR

// const header = document.querySelector(`#logo`);
// const firstCont = document.querySelector(`.main`);
// const firstLi = document.querySelector(`li`);

// console.log(header);
// console.log(firstCont);
// console.log(firstLi);

// firstLi.textContent = `first itemm`;

// const input = document.querySelector(`input`);
// input.value = `Hello world`;

// const input2 = document.querySelector(`input[type ='email']`);
// // input2.value = `test@test.com`;

// // input2.placeholder = `Unesite vasu email adresu`;

// // QUERY SELECTOR ALL

// const listItems2 = document.querySelectorAll(`li`);
// console.log(listItems2);

// const evenLi = document.querySelector(`li:nth-child(even)`);
// const oddLi = document.querySelector(`li:nth-child(odd)`);

// for (b = 0; b < oddLi.length; b++) {
//   oddLi[b].style.backgroundColor = `yellow`;
//   evenLi[b].style.backgroundColor = `blue`;
// }

// // parrentNode

// // const title = document.getElementById(`naslov`);
// // console.log(title.parentNode);

// // // childNode

// // const container1 = document.getElementById(`main`);
// // console.log(container1.childNodes);

// // CERATE ELEMENT

// const newDiv = document.createElement(`div`);
// console.log(newDiv);

// // ADD Class

// newDiv.className = `newDiv`;

// container.appendChild(newDiv);

// // ADD ID

// newDiv.id = `newId`;

// input2.setAttribute(`placeholder`, `Unesi email breeee!!!`);
// console.log (input2.getAttribute("placeholder"));

let button = document.querySelector("#batn");
button.addEventListener("click", buttonClicked);

function buttonClicked() {
  //   console.log(event);
  //   console.log(event.target.className);
  //   console.log(event.target.classList);

  //   //   console.log(event.clientX);
  //   //   console.log(event.clientY);

  //   console.log(event.altKey);
  //   console.log(event.ctrlKey);
  // console.log(event.shiftKey)
  button.style.backgroundColor = `red`;
  button.style.color = `white`;
}

// GET ELEMENT BY ID
// const logo = document.getElementById(`logo`);
// console.log(logo);

// // GET ELEMENT BY CLASS NAME

// const listItems = document.getElementsByClassName(`main`);
// console.log(listItems);

// // GET ELEMENT BY TAG NAME

// const li = document.getElementsByTagName(`li`);
// console.log(li);

// // QUERY SELECTOR

// const main = document.querySelector(`div`);
// console.log(main);

// QUERY SELECTOR ALL

// const main1 = document.querySelectorAll(`div`);
// console.log(main1);

// DOM MANIPULATION

// const logo = document.querySelector(`#logo`);
// logo.style.color = `blue`;

// STYLING ELEMENTS --->

// const list = document.querySelectorAll(`.ulli`);
// // list.style.color = `white`;  NE MOZE OVAKO

// for (i = 0; i < list.length; i++) {
//   list[i].style.fontSize = `2.5rem`;
// }

// console.log(list);

// CREATING ELEMENTS ----->

// const ul = document.querySelector(`ul`);
// const li = document.createElement(`li`);
// // ADDING ELEMENTS
// ul.append(li);

// MODIFYING THE TEXT

// Pristupanje text-u
// const firstItem = document.querySelector("#prvi");
// console.log(firstItem.innerText); // pristupanje textu

// li.innerText = `Item666`;

// MODIFYING ATTRIBUTES & CLASSES

// li.setAttribute("id", "naslov-lista");
// li.removeAttribute("id");

// const title = document.querySelector("#drugi");
// console.log(title.getAttribute("id"));

//  li.classList.add(`list-items`); // dodaje element u listu

// console.log(li.classList.contains(`list-items`)); // proverava da li je element dodat u listu

// PARENT NODE
// let ull = document.querySelector("ul");
// // console.log(ull.parentNode);
// // console.log(ull.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);

// CHILD NODE

let ull = document.querySelector(`ul`);
// console.log(ull.childNodes);
// console.log(ull.firstChild);
// console.log(ull.lastChild);

// ull.childNodes[1].style.backgroundColor = "blue"; nekako radi ?

// console.log(ull.children);
// console.log(ull.firstElementChild);
// console.log(ull.lastElementChild);

// SIBLING NODE TRAVERSAL

// console.log(ull.previousElementSibling);
// console.log(ull.nextElementSibling);

let cetvrti = document.querySelector(`#cetvrti`);
// cetvrti.addEventListener("dblclick", runEvent);
// cetvrti.addEventListener("dblclick", runEvent);
// cetvrti.addEventListener("mouseup", runEvent);
// cetvrti.addEventListener("mouseenter", runEvent);
// cetvrti.addEventListener("mouseleave", runEvent);
// cetvrti.addEventListener("mousemove", runEvent);

// cetvrti.addEventListener("keydown", runEvent);
// cetvrti.addEventListener("keyup", runEvent);
// cetvrti.addEventListener("keypress", runEvent);

// function runEvent(event) {
//   console.log(`Type of event:` + event.type);
// }

let input = document.querySelector(`#input1`);
// // input.addEventListener(`input`, getValue);
// input.addEventListener(`input`, getValue);

// function getValue(e) {
//   let itemValue = e.target.value;
//   console.log(itemValue);
// }

let form = document.querySelector(`form`);
form.addEventListener(`submit`, getValues);

function getValues(e) {
  e.preventDefault();
  let input = document.querySelector(`#input1`);
  let itemName = input.value;
  console.log(itemName);

  input.value = "";
}

let deleteButton = document.createElement(`button`);
const textDeleteButton = (document.createTextNode = "X");
deleteButton.className = `deletebtn`;
deleteButton.append(textDeleteButton);

let lis = document.querySelectorAll(`li`);
let li = lis[lis.length - 1];
li.appendChild(deleteButton);
console.log(deleteButton);
