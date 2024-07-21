/** @format */

// swagger.ts
import swaggerJsdoc, { Options } from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import path from "path";
import { SWAGGER_UI_INFO } from "../../libs/common/data";
import {
  UserSchema,
  ProductSchema,
  UserProductSchema,
} from "../../libs/common/data";
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
        UserProduct: UserProductSchema,
      },
    },
  },
  apis: [
    path.resolve(__dirname, "../users/routes/index.ts"),
    path.resolve(__dirname, "../product-management/product/routes/index.ts"),
    path.resolve(
      __dirname,
      "../product-management/user-product-junction/routes/index.ts"
    ),
  ],
};

const specs = swaggerJsdoc(options);

export default function setupSwagger(app: Express) {
  app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));
}
