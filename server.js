const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

require('dotenv').config();

const PORT = process.env.PORT || 4000;


const app = express();
///middleware
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());