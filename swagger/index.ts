/** @format */

// swagger.ts
import swaggerJsdoc, { Options } from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import path from "path";
import { SWAGGER_UI_INFO } from "../libs/common";
import { UserSchema, ProductSchema } from "../libs/common";
import dotenv from "dotenv";
dotenv.config();

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: SWAGGER_UI_INFO.title,
      version: SWAGGER_UI_INFO.version,
      description: SWAGGER_UI_INFO.description,
    },
    components: {
      schemas: {
        User: UserSchema,
        Product: ProductSchema,
      },
    },
  },
  apis: [
    path.resolve(__dirname, "../src/users/routes/index.ts"),
    path.resolve(
      __dirname,
      "../src/product-management/product/routes/index.ts"
    ),
  ],
};

const specs = swaggerJsdoc(options);

export default function setupSwagger(app: Express) {
  app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));
}
