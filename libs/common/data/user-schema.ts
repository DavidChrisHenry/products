/** @format */

import { SwaggerType } from "../enums";

export const UserSchema = {
  type: SwaggerType.Object,
  required: ["name", "email", "country"],
  properties: {
    id: {
      type: SwaggerType.String,
      description: "The auto-generated id of the user",
      readOnly: true,
    },
    name: {
      type: SwaggerType.String,
      description: "The name of the user",
    },
    email: {
      type: SwaggerType.String,
      description: "The email of the user",
    },
    country: {
      type: SwaggerType.String,
      description: "The country of the user",
    },
  },
};
