import { Schema,Document,model } from "mongoose";

export interface IUserDocument extends Document{
    userName:string;
    email:string;
    password:string;
    // ... more will be coming
}

const userSchema= new Schema<IUserDocument>({
    userName:{
        type:String,
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
},{ timestamps: true })

export const userModel=model<IUserDocument>("User",userSchema);