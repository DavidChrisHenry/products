/** @format */

export class UpdateUserDTO {
  constructor(
    name: string = "",
    email: string = "",
    password: string = "",
    avatarURL = ""
  ) {
    this.name = name;
    this.email = email;
    this.country = password;
    this.avatarURL = avatarURL;
  }
  readonly name: string;
  readonly email: string;
  readonly country: string;
  readonly avatarURL: string;
}
