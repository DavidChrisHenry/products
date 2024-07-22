/** @format */

export class CreateUserDTO {
  constructor(
    name: string = "",
    email: string = "",
    country: string = "",
    password: string = ""
  ) {
    this.name = name;
    this.email = email;
    this.country = country;
    this.password = password;
  }
  readonly name: string;
  readonly email: string;
  readonly country: string;
  readonly password: string;
}
