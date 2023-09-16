
import type {Request,Response,NextFunction} from "express"
import {asyncMiddleware} from "../../../middlewares"



export const getUserById = asyncMiddleware(async (_req:Request,res:Response,_next:NextFunction)=>{
    // const userData=await userModel.findOne({_id:req.userId})
    // redisDta=redis.getUser(userId)
    // if(!redisData){
    //     redis.setUser("userId",JSON.stringify(userData))
    //     return res.status.json({message:"lol",data:userData})
    // }
    
    res.status(200).json({message:"lol",data:"Thanks User"})
})
