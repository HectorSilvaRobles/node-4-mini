require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();
const {PORT, SESSION_SECRET} = process.env

const {getAllMessages, createMessage, history} = require('./messageCrtl')

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))

app.get('/api/messages', getAllMessages);
app.get('/api/messages/history', history)
app.post('/api/messages', createMessage);

app.listen(PORT, ()=> console.log(`listening on port ${PORT}`))