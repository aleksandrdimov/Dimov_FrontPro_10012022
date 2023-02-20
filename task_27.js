/*
Вам потрібно зробити конструктор сутності "Студент".

Студент має ім'я, прізвище, рік народження — це властивості. 
Є масив з оцінками, це також властивість. І є можливість отримати вік студента та 
його середній бал – це методи.

Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений,
але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод 
.present() на чергове порожнє місце, в масив записується true,
коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, 
щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, 
present та absent – ​​методи.

Останній метод: .summary(), перевіряє середню оцінку і середнє 
відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, 
а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!",
якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів)
і показати використання цих методів.
*/

class Student {
  attendance = new Array(25);

  constructor(firstName, lastName, yearOfBirth, gradesArray) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.grades = gradesArray;
  }

  present() {
    for (let i = 0; i < this.attendance.length; i++) {
      if (this.attendance[i] === undefined) {
        this.attendance[i] = true;
        break;
      }
    }
  }

  absent() {
    for (let i = 0; i < this.attendance.length; i++) {
      if (this.attendance[i] === undefined) {
        this.attendance[i] = false;
        break;
      }
    }
  }

  viewStudentAge() {
    console.log(`${this.firstName} : ${2023 - this.yearOfBirth} years`);
  }

  averageGrade() {
    const calcGrade = (
      this.grades.reduce((a, b) => a + b) / this.grades.length
    ).toFixed(2);
    console.log(`Средняя оценка ${calcGrade}`);
    return calcGrade;
  }

  averageAttendance() {
    const calcAttendance = (
      this.attendance.filter((item) => item === true).length /
      this.attendance.filter((item) => item === true || item === false).length
    ).toFixed(2);
    console.log(`Коэфициент посещаемости ${calcAttendance}`);
    return calcAttendance;
  }

  summary() {
    const numberGrade = this.averageGrade();
    const numberAttendance = this.averageAttendance();
    if (numberGrade > 90 && numberAttendance > 0.9) {
      console.log("Молодець!");
    } else if (numberGrade > 90 || numberAttendance > 0.9) {
      console.log("Добре, але можна краще");
    } else {
      console.log("Редиска!");
    }
  }
}

const bob = new Student("Bob", "Smith", "2005", [95, 90, 99, 90]);
const alice = new Student("Alice", "Ivanenko", "2006", [76, 91, 99, 89]);

bob.present();
bob.present();
bob.present();
bob.present();
bob.absent();
bob.present();
bob.present();
bob.viewStudentAge();
bob.summary();
console.log(bob);

alice.present();
alice.present();
alice.absent();
alice.present();
alice.present();
alice.viewStudentAge();
alice.summary();
console.log(alice);
