/** @format */

import path from "path";

export function getSwaggerPaths() {
  const isDev = process.env.NODE_ENV;

  const paths = isDev
    ? [
        path.resolve(__dirname, "../src/users/routes/index.ts"),
        path.resolve(
          __dirname,
          "../src/product-management/product/routes/index.ts"
        ),
        path.resolve(
          __dirname,
          "../src/product-management/user-product-junction/routes/index.ts"
        ),
      ]
    : [
        path.resolve(__dirname, "../src/users/routes/index.js"),
        path.resolve(
          __dirname,
          "../src/product-management/product/routes/index.js"
        ),
        path.resolve(
          __dirname,
          "../src/product-management/user-product-junction/routes/index.js"
        ),
      ];
  return paths;
}
