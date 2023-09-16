import express from "express"
import {getUserById} from "../controllers"

const router= express.Router()

router.get("/get",getUserById)

export default router;
