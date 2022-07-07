import { Router } from "express";
import { registerUser, loginUser } from "../controllers/userController.js";


const authRouter= Router ()

authRouter.post("/cadastro",registerUser);

// router.post("/login", validateLogin,loginUser);

export default authRouter;