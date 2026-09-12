import { Server as HttpServer } from "http";

import { application } from "./application.ts";

const server = new HttpServer(application);

server.listen(9000, () => console.log("Server is listening on port:", 9000));
