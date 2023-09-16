type Caterer = {
  name: string;
  address: string;
  phone: number;
};

type Airplane = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: Caterer;
};
