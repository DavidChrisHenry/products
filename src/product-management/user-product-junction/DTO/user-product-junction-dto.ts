/** @format */

export class UserProductDTO {
  constructor(userId: string = "", productId: string = "") {
    this.userId = userId;
    this.productId = productId;
  }
  readonly userId: string;
  readonly productId: string;
}
