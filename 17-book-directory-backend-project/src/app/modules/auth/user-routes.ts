import express from 'express';
import { registerUser } from './user-controllers';
const router = express.Router();

router.post("/register", registerUser)


export default router;
