import { Express } from "express";
import routesConfig from "./routes.config";

export default function (app: Express) {
  routesConfig(app);
}
