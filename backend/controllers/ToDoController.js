const { response } = require('express');
const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req,res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

module.exports.saveToDo = (req,res) => {

    const { text } = req.body;


    ToDoModel.create({text})
        .then((data) =>{
            console.log("Added");
            console.log(data);
            res.send(data)
        })
        .catch((err) => {
            console.log(err);
            res.send({error: err , msg : "SOmething wrong"});
        });
}

module.exports.updateToDo = (req,res) => {
    const { _id , text } = req.body
    ToDoModel
    .findByIdAndUpdate(_id , {text})
    .then(()=>res.send("Updated"))
    .catch((err) => console.error(err));
}

module.exports.deleteToDo = (req,res) => {
    const {_id} = req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=>res.send("Deleted"))
    .catch((err) => console.error(err));
}