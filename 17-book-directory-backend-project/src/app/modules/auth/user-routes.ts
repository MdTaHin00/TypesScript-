import express from 'express';
import { registerUser,loginUser } from './user-controllers';
const router = express.Router();

//? register post route
router.post("/register", registerUser)

//? login post route
router.post("/login", loginUser)

export default router;
