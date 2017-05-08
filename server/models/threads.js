import mongoose, { Schema } from 'mongoose';

// Define movie schema
var threadSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  name: String,
  text: String,
  days: Array,
  times: Array,
});

// Export Mongoose model
export default mongoose.model('thread', threadSchema);