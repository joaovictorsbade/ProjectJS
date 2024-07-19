const User = require('../models/User');

exports.newUser = async (req, res) => {
    const user = new User(req.body);
    console.log('cadastrando o usuario')

    try{
        await user.save();
        res.status(201).send(user);
    }catch (error){
        res.status(400).send(error);
    }

};

 exports.allUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
      } catch (error) {
        res.status(500).send(error);
      }
 };

// exports.idUser = async (req, res) => {

// };