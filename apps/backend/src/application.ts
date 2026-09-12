import express from "express";
import helmet from "helmet";
import cors from "cors";

import { CorsConfigurationOptions } from "./configuration/cors.configuration.ts";

export const application = express();

application.use(helmet());
application.use(cors(CorsConfigurationOptions));
application.use(express.json({ limit: "1mb" }));
application.use(express.urlencoded({ extended: true, limit: "1mb" }));
