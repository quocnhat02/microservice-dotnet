let a: number[] = [1, 2, 3];

let b: Array<string> = ["a", "b", "c"];

let c: (string | number)[] = ["a", "b", 1, 2];

type Airplane = {
  flightNumber: string;
  airplaneModel: string;
  dateOfDeparture: string;
  timeOfDeparture: string;
  from: string;
  to: string;
  seats: {
    [key: string]: string;
  };
};

const airplanes: Airplane[] = [
  {
    flightNumber: "SG102",
    airplaneModel: "A380",
    dateOfDeparture: "01/01/2023",
    timeOfDeparture: "23:10",
    from: "JFK",
    to: "DCA",
    seats: {
      "10A": "Mark Thomas",
      "10B": "John Wick",
    },
  },
  {
    flightNumber: "SG103",
    airplaneModel: "A381",
    dateOfDeparture: "01/01/2023",
    timeOfDeparture: "23:10",
    from: "JFK",
    to: "DCA",
    seats: {
      "10C": "Mark Thomas",
      "10D": "John Wick",
    },
  },
];
