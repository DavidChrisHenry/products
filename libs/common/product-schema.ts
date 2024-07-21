/** @format */

// userSchema.ts
import { SwaggerType } from "../../enums";

export const ProductSchema = {
  type: SwaggerType.Object,
  required: ["name", "price", "country", "description"],
  properties: {
    id: {
      type: SwaggerType.String,
      description: "The auto-generated id of the product",
      readOnly: true,
    },
    name: {
      type: SwaggerType.String,
      description: "The name of the product",
    },
    price: {
      type: SwaggerType.Number,
      description: "Price of product",
    },
    country: {
      type: SwaggerType.String,
      description: "The country of the product",
    },
    description: {
      type: SwaggerType.String,
      description: "The description of the product",
    },
  },
};
