await import("dotenv-flow").then((dotenv) => dotenv.config({ silent: true }));

function handleGetEnvironmentVariableByName(name: string) {
    const value = process.env[name];

    if (!value) {
        console.error("Environment variable is not defined with name:", name);
        throw new Error("Missing required environment variables.");
    }

    return value;
}

export const EnvironmentVariables = {
    PORT: Number(handleGetEnvironmentVariableByName("PORT")),
    CURRENT_ENVIRONMENT: handleGetEnvironmentVariableByName("NODE_ENV"),

    FRONTEND_URL: handleGetEnvironmentVariableByName("FRONTEND_URL")
} as const;
