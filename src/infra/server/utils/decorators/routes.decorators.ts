import "reflect-metadata";
import { Express } from "express";

type RouteKeys = keyof Pick<
  Express,
  "post" | "put" | "get" | "delete" | "patch" | "head" | "options" | "trace"
>;

function routeApi(method: RouteKeys, path: string) {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata("route", { method, path }, target, propertyKey);
  };
}

function controllerApi(path: string) {
  return function (constructor: Function) {
    Reflect.defineMetadata("controller", path, constructor.prototype);
  };
}

function apiMiddleware(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const metadata = Reflect.getMetadata("rota", target, propertyKey);
    if (!metadata) {
      throw new Error(
        `The method ${propertyKey} in ${target.constructor.name} is not defined.`
      );
    }
    return originalMethod.apply(this, args);
  };
}

export { routeApi, controllerApi, apiMiddleware };
