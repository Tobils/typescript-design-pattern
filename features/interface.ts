const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
};

/** without interface */
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}) => {
  console.log(vehicle);
};
printVehicle(oldCivic);

/** with interface */
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string /** function in interface */;
}

const newCivic: Vehicle = {
  name: "new civic",
  year: new Date(),
  broken: false,
  summary: function (): string {
    return `Name ${this.name}`;
  },
};
const showVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle);
  console.log(vehicle.summary());
};
showVehicle(newCivic);
