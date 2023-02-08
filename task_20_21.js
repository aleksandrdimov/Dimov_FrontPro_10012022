// task 20
function pow(num, degree) {
  if (degree === 1) {
    return num;
  } else {
    return num * pow(num, degree - 1);
  }
}

console.log(pow(3, 3));

// task 21
let ladder = {
  step: 0,
  up: function () {
    this.step++;
    return this;
  },
  down: function () {
    this.step--;
    return this;
  },
  showStep: function () {
    alert(this.step);
  },
};

ladder.up().up().down().showStep();
