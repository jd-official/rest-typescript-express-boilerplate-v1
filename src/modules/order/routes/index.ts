import express from "express"
import {getOrderById} from "../controllers"

const router= express.Router()

router.get("/",getOrderById)

export default router;
