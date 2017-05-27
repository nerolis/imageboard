import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { serverPort } from './config.json';
import * as db from './Utils';

const app = express();

db.setUpConnection();

app.use( bodyParser.json() );


app.use(cors({ origin: '*' }));

app.get('/api/threads', (req, res) => {
    db.listThreads().then(threads => res.send(data));
    
    
});

app.post('/api/threads', (req, res) => {
    db.createThread(req.body).then(data => res.send(data));
});

app.delete('/api/threads/:id', (req, res) => {
    db.deleteThread(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});