import { Router } from "express";
import { registerUser } from "../controllers/userController.js";


const authRouter= Router ()

authRouter.post("/cadastro",registerUser);

// router.post("/login", validateLogin,loginUser);a

export default authRouter;