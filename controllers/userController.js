const { using } = require('bluebird');
const { response } = require('express');
const db = require('../models');
const Users = db.users;

var addUser = async (req,res)=>{
   
    //insert data
    let data = await Users.create({name:'Rohit Jain',title:'Human', tagline:'Good Human', description:'Helpful' });
 
    console.log(data.dataValues);
    

    let response ={
        data:'OK'
    }
    res.status(200).json(response);
}

var addCrud = async (req,res)=>{

    //Update
    // let data = await Users.update({name:'Rajat Jain' , title:'I am a Businessman'},{
    //     where:{
    //         id:7
    //     }
    // });

    //Delete
    // let del = await Users.destroy({
    //     where:{
    //         name:'Rohit Jain'
    //     }
    // });

    //Truncate
    // let del1 = await Users.destroy({
    //     truncate:true
    // });
 
    //Bulk insertion

    // let data = await Users.bulkCreate([
    //     {name:'Rahul', tagline:'Job'},
    //     {name:'Vivek', tagline:'Job'},
    //     {name:'Mayank', tagline:'Business Man'},
    //     {name:'Ashok Pugalia', tagline:'GOD FATHER'}
    // ]);

    //Find All Data

    let data = await Users.findAll({});

    let response = {
        data: data
    }
    res.status(200).json(response);
}

module.exports ={
    addUser,
    addCrud
}