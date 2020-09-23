class Vehicle {
  constructor(public color: string) {}
  protected drive(): void {
    console.log("Chugga Chugga");
  }
  public honk(): void {
    console.log("Beep");
  }

  public printColor(): void {
    console.log(this.color);
  }
}

class Car extends Vehicle {
  constructor(public wheels: number) {
    super("red");
  }
}

const vehicle = new Car(2);
vehicle.honk();
