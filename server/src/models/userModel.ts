import { db } from "database/config";
import { Document, Schema } from "mongoose";

interface UserDocument extends Document{
    name:string,
    email:string,
    phone:string,
    password:string,
}
const UserSchema = new Schema<UserDocument>({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    phone:{
        type:String,
    }
})

const UserModel = db.model("User",UserSchema)

export default UserModel