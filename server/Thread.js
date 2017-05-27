import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ThreadSchema = new Schema({
    id        : { type: String},
    name     : { type: String},
    text      : { type: String},
    image     : { type: String},
    createdAt : { type: Date, defalt: Date.now},
    posts: [{ body: String, date: Date }]
});

const Thread = mongoose.model('Thread', ThreadSchema);