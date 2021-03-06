import mongoose, { Schema, Document } from 'mongoose';

export interface IProvincia extends Document {
  id: String;
  name: String;
  department_id: String;
}

const schema: Schema = new Schema({
  id: {
    type: String,
    required:true
  },

  name: {
    type: String,
    required:true
  },
  department_id: {
    type: String,
    required:true
  },
});

export default mongoose.model<IProvincia>('Provincias', schema);
