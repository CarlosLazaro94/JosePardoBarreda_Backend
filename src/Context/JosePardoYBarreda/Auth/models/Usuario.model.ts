import mongoose, { Schema, Document } from 'mongoose';
import bcryptjs from 'bcryptjs';
export interface IUsuario extends Document {
  usuario: string;
  password: string;
  DateCreate: Date;
  DateModified: Date;
  active: boolean;
}

const schema: Schema = new Schema({
  usuario: {
    type: String,
    required: true,
    trim:true,
    unique:true
  },
  password: {
    type: String,
    required: true,
    trim:true
  },
  DateCreate: {
    type: Date,
    required: true,
    default:Date.now(),
  },
  DateModified: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default:true
  },
});
 
schema.pre('save',async function(next){

  const self: IUsuario = this as IUsuario;

  if(this.isModified("password")){
    self.password =await bcryptjs.hash(self.password,10) 
  }
  next()
})

export default mongoose.model<IUsuario>('Usuario', schema);
