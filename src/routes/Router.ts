import express from 'express';
import user from "./User";

const Router = express();
Router.use("/user", user)

export default Router;