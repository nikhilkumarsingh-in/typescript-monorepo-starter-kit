import { Server as HttpServer } from "http";

import { application } from "./application.ts";
import { EnvironmentVariables } from "./configuration/environment.configuration.ts";

const server = new HttpServer(application);

server.listen(EnvironmentVariables.PORT, () => {
    console.log("Server is listening on port:", EnvironmentVariables.PORT);
    console.log("Current environment for the application is:", EnvironmentVariables.CURRENT_ENVIRONMENT);
});
