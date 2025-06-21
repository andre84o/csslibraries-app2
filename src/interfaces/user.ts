export interface RandomUser {
  name: {
    first: string;
    last: string;
  };
  cell: string;
  email: string;
  registered: string;
  age: string;
  location: {
    country: string;
  };
  picture: {
    large: string;
  };
}
