/** @format */

export class CreateProductDTO {
  constructor(
    name: string = "",
    description: string = "",
    price: number = 0,
    country: string = ""
  ) {
    this.name = name;
    this.price = price;
    this.country = country;
    this.description = description;
  }
  readonly name: string;
  readonly price: number;
  readonly country: string;
  readonly description: string;
}
