import { Router } from "express";
import { registerUser, loginUser } from "../controllers/userController.js";


const authRouter= Router ()

authRouter.post("/cadastro",registerUser);

authRouter.post("/login",loginUser);

export default authRouter;