import type { CorsOptions } from "cors";

import { EnvironmentVariables } from "./environment.configuration.ts";

export const CorsConfigurationOptions: CorsOptions = {
    credentials: true,

    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],

    origin(requestOrigin, callback) {
        if (!requestOrigin) return callback(null, true);
        if (requestOrigin === EnvironmentVariables.FRONTEND_URL) return callback(null, true);

        return callback(new Error("Request origin is not allowed by CORS policy."));
    }
};
