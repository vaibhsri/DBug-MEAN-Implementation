const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Code } = require('../models/code'); // code.js import

// GET REQUEST // READ
// localhost:3000/code -> read all data
router.get('/',(req, res)=> {
    Code.find((err,docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retrieving Code :' + JSON.stringify(err,undefined, 2)); }
    });
});

// POST REQUEST // CREATE
router.post('/',(req,res) => {
    var newCode = new Code({
        user: req.body.user,
        code: req.body.code,
        language: req.body.code,
        Serial: req.body.Serial,
    });
    newCode.save((err, doc) => {
        if (!err) { res.send(doc) }
        else {  console.log('Error in Saving Code :' + JSON.stringify(err,undefined, 2)); }
    });
});

// QUERIED GET REQUEST // READ
router.get('/:id',(req, res)=> {
    if (!ObjectId.isValid(req.params.id)) 
        return res.status(400).send(`Unable to find : ${req.params.id}`); 
        // else { console.log('Error in Retrieving Code :' + JSON.stringify(err,undefined, 2)); }
    Code.findById(req.params.id, (err,docs) => {        
        if (!err) { res.send(docs) }
        else {  console.log('Error in Retrieving Code :' + JSON.stringify(err,undefined, 2)); }
    });
});

// PUT REQUEST // UPDATE
router.put('/:id',(req, res)=> {
    if (!ObjectId.isValid(req.params.id)) 
        return res.status(400).send(`Unable to find : ${req.params.id}`); 
    var newCode = {
        user: req.body.user,
        code: req.body.code,
        language: req.body.code,
        Serial: req.body.Serial,
    };
    Code.findByIdAndUpdate(req.param.id, {$set: newCode}, {new:true}, (err,docs) => {        
        if (!err) { res.send(docs) }
        else {  console.log('Error in Updating Code :' + JSON.stringify(err,undefined, 2)); }
    });
});//if new:true, updated value will be returned in response

// DELETE REQUEST // DELETE
router.delete('/:id',(req, res)=> {
    if (!ObjectId.isValid(req.params.id)) 
        return res.status(400).send(`Unable to find : ${req.params.id}`); 
        // else { console.log('Error in Retrieving Code :' + JSON.stringify(err,undefined, 2)); }
    Code.findByIdAndRemove(req.params.id, (err,docs) => {   //you could use findByIdAndDelete() there's no difference      
        if (!err) { res.send(docs) }
        else {  console.log('Error in Deleting Code :' + JSON.stringify(err,undefined, 2)); }
    });
});

module.exports = router;

// 33:35

