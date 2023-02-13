const carProp = {
  go: function () {
    console.log(`${this.brand} go`);
  },
  stop: function () {
    console.log(`${this.brand} stop`);
  },
};

const carDoorProp = {
  openDoorVertical: function () {
    console.log(`${this.brand} open door vertical`);
  },
};

function Car(brand) {
  this.brand = brand;
}

Car.prototype = carProp;

const carLambo = new Car("Lamborghini");
carLambo.__proto__.openDoor = carDoorProp.openDoorVertical;

console.log(carLambo);
