import express from "express"
import { getProductById } from "../controllers"

const router=express.Router()

router.get("/",getProductById)

export default router