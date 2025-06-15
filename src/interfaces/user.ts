export interface RandomUser {
  name: {
    first: string;
    last: string;
  };
  email: string;
  location: {
    country: string;
  };
  picture: {
    large: string;
  };
}
