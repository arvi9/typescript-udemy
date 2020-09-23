interface Vehicle1 {
  summary(): string;
}

const oldCivic = {
  name: "Honda",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle1): void => {
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`IsBroken: ${vehicle.broken}`);
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
