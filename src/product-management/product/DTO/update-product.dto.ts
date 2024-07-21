/** @format */

export class UpdateProductDTO {
  constructor(
    name: string = "",
    description: string = "",
    price: string = "",
    country: string = ""
  ) {
    this.name = name;
    this.price = price;
    this.country = country;
    this.description = description;
  }
  readonly name: string;
  readonly price: string;
  readonly country: string;
  readonly description: string;
}
