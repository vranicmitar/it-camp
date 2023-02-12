// Domaci:
// 34. Write a JavaScript function to get nth largest element from an unsorted array. Go to the editor
// Test Data :
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89

const nthLargest = (arr, position) => {
  const arr2 = arr.sort((a, b) => b - a);
  return arr[position - 1];
};
console.log(nthLargest([43, 56, 23, 89, 88, 90, 99, 652], 4));

// 39. Write a JavaScript function to filter false, null, 0 and blank values from an array. Go to the editor

// Test Data :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]

const drugi = (niz) => {
  const novi = [];
  niz.filter((element) => {
    if (element) novi.push(element);
  });
  return novi;
};
console.log(drugi([58, "", "abcd", true, null, false, 0]));

// 16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

// const student1 = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };

const keysToValues = (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const newObj = {};
  for (let i = 0; i <= values.length - 1; i++) {
    newObj[values[i]] = keys[i];
  }
  return newObj;
};

// 3. Write a JavaScript program to get the length of a JavaScript object. Go to the editor
// Sample object :
const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

const student2 = Object.keys(student).length;
console.log(student2);

[10, 20];
