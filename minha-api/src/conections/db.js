const mongoose = require('mongoose');

const uri = 'mongodb+srv://gustavosbmvace:Qnpng0ofEqkpB5TT@cluster0.5ctkos1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(uri, {
});

const db = mongoose.connection;

db.on('error' , console.error.bind(console, 'connection error: '));
db.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});

module.exports = mongoose;