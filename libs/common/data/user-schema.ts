/** @format */

import { SwaggerType } from "../enums";

export const UserSchema = {
  type: SwaggerType.Object,
  required: ["name", "email", "country", "password"],
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
    password: {
      type: SwaggerType.String,
      description: "The password of the user",
      writeOnly: true,
    },
  },
};
