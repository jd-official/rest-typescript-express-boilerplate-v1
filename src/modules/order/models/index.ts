import { Schema,Document,model } from "mongoose"


 export interface IOrderDocument extends Document{
    order_name:string,
    user_Id:string
}

const orderSchema= new Schema<IOrderDocument>({
    order_name:{
        type:String
    },
    user_Id:String
})

export const orderModel= model<IOrderDocument>("Order",orderSchema)