import { Express } from "express";
import UserController from "../../../application/controllers/user-controller";
import registerRoutes from "../utils/RouterExpress.utils";
import "reflect-metadata";

export default function (app: Express) {
  registerRoutes(app, new UserController());
}
