class Vehicles {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

class Cars extends Vehicles {
  honk(): void {
    console.log(`beep beep`);
  }
}

const newCar = new Cars("red");
newCar.honk();

class Motor extends Vehicles {
  constructor(public wheels: number, color: string) {
    super(color);
  }
}
const newMotor = new Motor(2, "black");
