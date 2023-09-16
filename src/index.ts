type Reservation = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
};

type Reserve = {
  (
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string,
  ): Reservation | never;
  (
    departureDate: Date,
    departingFrom: string,
    destination: string,
  ): Reservation | never;
};

const reserve: Reserve = (
  departureDate: Date,
  returnDateOrDepartingFrom: Date | string,
  departingFromOrDestination: string,
  destination?: string,
) => {
  if (returnDateOrDepartingFrom instanceof Date && destination) {
    return {
      departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination: destination,
    };
  } else if (typeof returnDateOrDepartingFrom === "string") {
    return {
      departureDate,
      departingFrom: returnDateOrDepartingFrom,
      destination: departingFromOrDestination,
    };
  }
  throw new Error("Please provide valid details to reserve a ticket");
};
