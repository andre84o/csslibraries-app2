export interface RandomUser {
  login: {
    uuid: string;
  };
  name: {
    first: string;
    last: string;
  };
  cell: string;
  email: string;
  location: {
    country: string;
  };
  picture: {
    large: string;
    thumbnail: string;
  };
}
