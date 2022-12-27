import "reflect-metadata";
import "express-async-errors";
import express, { json } from "express";
import createUsersRoutes from "./routes/users/users.routes";
import errorHandler from "./errors/errors";
import createSessionsUsersRoutes from "./routes/sessions/login.routes";
import createCategoryRoutes from "./routes/categories/categories.routes";
import createProperyRoutes from "./routes/properties/properties.routes";
import createSchedulesRoutes from "./routes/schedules/schedules.routes";

const app = express();

app.use(json());

app.use("/users", createUsersRoutes);

app.use("/login", createSessionsUsersRoutes);

app.use("/categories", createCategoryRoutes);

app.use("/properties", createProperyRoutes);

app.use("/schedules", createSchedulesRoutes);

app.use(errorHandler);

export default app;
