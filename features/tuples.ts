const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ["sugar", true, 40];

/** Type alias */
type Drink = [string, boolean, number];
const sprite: Drink = ["sugar", true, 40];

const carSpecs: [number, number] = [400, 3354];
const carState = {
  horsePower: 400,
  weight: 3354,
};
