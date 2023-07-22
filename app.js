require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectToDb = require('./config/db.js');

const app = express();

//express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//init to DB
connectToDb();

app.get('/', (req, res) => {
	res.send('Welcome to the world');
});

module.exports = app;
