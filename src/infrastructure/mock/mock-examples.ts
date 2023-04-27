import { User } from "../../domain/models/user";

export const createUserMock = (): User => {
  return {
    name: {
      title: "Mrs",
      first: "Jane",
      last: "Doe",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/22.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/22.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/22.jpg",
    },
    gender: "female",
    nat: "US",
    dob: {
      date: "1986-10-06T05:33:52.880Z",
      age: 35,
    },
    location: {
      city: "Los Angeles",
      state: "California",
      country: "United States",
      postcode: 12345,
      coordinates: {
        latitude: "33.123",
        longitude: "-118.123",
      },
      street: {
        name: "Main Street",
        number: 123,
      },
      timezone: {
        offset: "+5:30",
        description: "India Standard Time",
      },
    },
    email: "jane.doe@example.com",
    login: {
      md5: "1234",
      password: "password",
      salt: "salt",
      sha1: "5678",
      sha256: "9012",
      username: "janedoe",
      uuid: "1234-5678",
    },
    registered: {
      date: "2022-04-26T05:33:52.880Z",
      age: 1,
    },
    phone: "123-456-7890",
    cell: "098-765-4321",
    id: {
      name: "SSN",
      value: "123-45-6789",
    },
  };
};
