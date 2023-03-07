class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }
  lengthprice() {
    return this.length / this.price;
  }
  summary() {
    return `${this.title}: ${this.length} hours for $${this.price}`;
  }
  price1() {
    if (this.price > 0) {
      console.log(`${this.price} $`);
    } else {
      return `Price must be positive`;
    } 
  }
}

const course1 = new Course("IT Camp", 9, 100);
const course2 = new Course("OOP", 2, 80);
console.log(course1);
console.log(course2);

// 2 task
console.log(course1.lengthprice());
console.log(course1.summary());

// 3 task

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercise) {
    super(title, length, price);
    this.numOfExercise = numOfExercise;
  }
  lengthprice() {
    return this.length / this.price;
  }
  summary() {
    return `${this.title}: ${this.length} hours for $${this.price}`;
  }
}
const pratCourse = new PracticalCourse("IT Camp", 9, 100, 5);
console.log(pratCourse);

class TheoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
  }
  publish() {
    console.log(`Something in console`);
  }
  lengthprice() {
    return this.length / this.price;
  }
  summary() {
    return `${this.title}: ${this.length} hours for $${this.price}`;
  }
}

const teoCourse = new TheoreticalCourse("OOP", 2, 80);
console.log(teoCourse);
teoCourse.publish();

// 4 task
const course3 = new Course("IT Camp", 9, -100);
console.log(course3);
console.log(course3.price1());
