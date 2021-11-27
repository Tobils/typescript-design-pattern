const carMakers: string[] = ["ford", "toyota", "chevy"];
const emptyArray = [];
const emptyArrayString: string[] = [];
const dates = [new Date(), new Date()];

const carByMake = [["f150"], ["f52"]];
const carByDouble: string[][] = [];

/** flexible type */
const importantdate: (Date | string)[] = [new Date(), "2021-11-11"];
importantdate.push("20222222");
importantdate.push(new Date());
