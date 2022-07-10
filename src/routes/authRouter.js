import { Router } from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import validateLogin from "../middlewares/loginMiddleware.js";
import validateRegister from "../middlewares/registerMiddleware.js";

const authRouter= Router ()

authRouter.post("/register", validateRegister, registerUser);

authRouter.post("/login",validateLogin,loginUser);

export default authRouter;  