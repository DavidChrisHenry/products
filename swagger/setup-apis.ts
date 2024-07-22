/** @format */

import path from "path";
import * as glob from "glob";

export function getSwaggerPaths() {
  const isDev = process.env.NODE_ENV === "dev";

  const routesBaseDir = path.resolve(__dirname, "../src");

  const filePattern = isDev
    ? `${routesBaseDir}/**/routes/*.ts`
    : `${routesBaseDir}/**/routes/*.js`;

  const paths = glob.sync(filePattern, { absolute: true });

  return paths;
}
