import { Router } from "express";
import { register } from "../controllers/auth/register";
import { login } from "../controllers/auth/login";


const router:Router = Router()


router.post('/login',login)

router.post('/register',register)


export default router