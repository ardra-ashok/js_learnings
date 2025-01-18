
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age)
    this.subject = subject
  }

  introduce() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and I teach ${this.subject}.`
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age)
    this.grade = grade
  }

  introduce() {
    return `Hi, I am ${this.name}, I am ${this.age} years old, and I am in grade ${this.grade}.`
  }
}

const teacher = new Teacher('Mr. Smith', 40, 'Mathematics')
const student = new Student('Alice', 14, 9)

console.log(teacher.introduce()) // Output: Hello, my name is Mr. Smith, I am 40 years old, and I teach Mathematics.
console.log(student.introduce()) // Output: Hi, I am Alice, I am 14 years old, and I am in grade 9.
