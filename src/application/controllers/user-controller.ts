import { Request, Response } from "express";
import { controllerApi, routeApi } from "../../infra/server/utils/decorators";

@controllerApi("/user")
export default class UserController {
  constructor() {}

  @routeApi("post", "/sing-up/:id")
  async singIn(req: Request, res: Response) {
    res.send(`Sing in ${req.params.id}`);
  }
}
