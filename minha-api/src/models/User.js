const { Mongoose } = require('mongoose');
const mongoose = require('../conections/db');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;