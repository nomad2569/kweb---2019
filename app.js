import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import path from "path";
import bodyParser, { urlencoded } from "body-parser";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import { localMiddle } from "./middlewares";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));

app.use(localMiddle);

app.use(routes.home, globalRouter);

export default app;
