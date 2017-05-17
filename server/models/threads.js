import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ThreadSchema = new Schema({
    name     : { type: String },
    text      : { type: String, required: true },
    createdAt : { type: Date }
    
    
});

const Note = mongoose.model('Thread', ThreadSchema);