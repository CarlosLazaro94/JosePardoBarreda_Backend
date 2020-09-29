import mongoose, { Schema, Document } from 'mongoose';

export interface IDepartamento extends Document {
  id: string;
  name: string;
}

const schema: Schema = new Schema({
  id: {
    type: String,
  },

  name: {
    type: String,
  },
});

export default mongoose.model<IDepartamento>('Departamentos', schema);
