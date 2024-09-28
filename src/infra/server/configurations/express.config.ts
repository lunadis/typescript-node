import express, { Express } from "express";
import DatabaseConnectionInterface from "../interfaces/contracts/database-connection-interface";
import expressMiddlewaresConfig from "./express-middlewares.config";
import apiConfig from "../parameters/server.parameters";

export default async function (database?: DatabaseConnectionInterface<any>) {
  const app: Express = express();
  expressMiddlewaresConfig(app);

  if (
    process.env.NODE_ENV === "production" ||
    process.env.NODE_ENV === "staging"
  ) {
    //TODO: IMPLEMENTS WHEN ITS RELEASE
    // const httpsServer = httpConfig(httpApi, api);
    // httpsServer.listen(apiConfig.ssl_port, () => {
    //   console.log("Server its up and running on port: " + apiConfig.port);
    // });
  } else {
    app.listen(apiConfig.port, function () {
      console.log("Server up and running on port " + apiConfig.port);
    });
  }

  return app;
}
