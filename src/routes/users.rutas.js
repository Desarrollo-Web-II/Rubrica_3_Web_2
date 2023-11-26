import { Router } from "express";
import { getUsers, login } from "../controllers/users.controller.js";

const router = Router()

router.get('/users', getUsers)

router.post('/users', login)

export default router;