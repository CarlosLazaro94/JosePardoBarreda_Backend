import mongoose, { Schema, Document } from 'mongoose';

export interface IRoles extends Document{
    roleName:String;
    isActive:Boolean;
}

const schema:Schema = new Schema({

    roleName:{
        type:String,
        required: true,
        unique:true
    },
    isActive:{
        type:Boolean,
        default:true
    }

});

export default mongoose.model<IRoles>("Roles",schema)