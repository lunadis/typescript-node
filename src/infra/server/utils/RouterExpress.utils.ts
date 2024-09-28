import { Express } from "express";

export default function registerRoutes(app: Express, controller: any) {
  const pathPrefix = Reflect.getMetadata("controller", controller);
  const prototype = Object.getPrototypeOf(controller);

  Object.getOwnPropertyNames(prototype).forEach((propertyKey) => {
    const metadata = Reflect.getMetadata("route", prototype, propertyKey);
    if (metadata) {
      const { method, path } = metadata as {
        method: keyof Express;
        path: string;
      };
      const completePath = `${pathPrefix}${path}`;
      app[method](completePath, controller[propertyKey]);
    }
  });
}
