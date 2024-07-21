/** @format */

import { SwaggerType } from "../enums";

export const UserProductSchema = {
  type: SwaggerType.Object,
  required: ["userId", "productId"],
  properties: {
    id: {
      type: SwaggerType.String,
      description: "The auto-generated id",
      readOnly: true,
    },
    userId: {
      type: SwaggerType.String,
      description: "Id of the user",
    },
    productId: {
      type: SwaggerType.String,
      description: "Id of the product",
    },
  },
};
