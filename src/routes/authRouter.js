import { Router } from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import validateLogin from "../middlewares/loginMiddleware.js";
import validateRegister from "../middlewares/registerMiddleware.js";

const authRouter= Router ()

<<<<<<< HEAD
authRouter.post("/cadastro",registerUser);
=======
authRouter.post("/register", validateRegister, registerUser);
>>>>>>> d596da7fa60ec0a8d6a2b3ba82529d4ddbfc56a7

authRouter.post("/login",validateLogin,loginUser);

export default authRouter;