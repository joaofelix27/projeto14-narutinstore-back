import { Router } from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import validateLogin from "../middlewares/loginMiddleware.js";
import validateRegister from "../middlewares/registerMiddleware.js";
import { logOut } from "../controllers/userController.js";

const authRouter= Router ()

authRouter.post("/register", validateRegister, registerUser);

authRouter.post("/login",validateLogin,loginUser);

authRouter.delete("/sessions", logOut)

export default authRouter;