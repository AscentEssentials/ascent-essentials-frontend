export interface User {
  name: string,
  surname: string,
  email: string,
  address: string,
  addressNumber: string,
  zipCode: string,
  telephoneNumber: string,
  password: string,
  isAdmin: boolean,
}

export interface Token {
  token: string,
}
