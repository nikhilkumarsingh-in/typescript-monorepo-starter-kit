import express from "express";

export const application = express();

application.use(express.json({ limit: "1mb" }));
application.use(express.urlencoded({ extended: true, limit: "1mb" }));
