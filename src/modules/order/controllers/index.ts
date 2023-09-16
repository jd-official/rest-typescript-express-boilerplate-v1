import type { Response,Request,NextFunction } from "express"
import { IOrderDocument, orderModel } from "../models"
import { asyncMiddleware } from "../../../middlewares"

// dummy
export const getOrderById= asyncMiddleware(async (req:Request,res:Response,_next:NextFunction)=>{
    try {
        const data:IOrderDocument|null = await orderModel.findById({_id:req.query.id})
        return res.status(200).json({
            success:true,
            message:"fetched successfully",
            resposeData:data
        })
    } catch (error) {
        return res.status(400).json({success:false})
    }
})