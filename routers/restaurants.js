// const { default: userEvent } = require('@testing-library/user-event');
const express=require('express');
const app=express();
const router=new express.Router();

let Restaurant = require('../models/restaurantmodels.js');



router.route('/').get((req,res)=>{
    Restaurant.find()
    .then(admdata=>res.json(admdata))
    .catch(err=>res.status(400).json('Error: ' + err));
})

router.route('/restaurantsignin').post((req,res)=>{
    const restaurantname=req.body.restaurantname; 
    const password=req.body.password;
    const email=req.body.email;
    const contact=req.body.contact;
    const address=req.body.address;
    const newRestaurant= new Restaurant({
        restaurantname, 
        password,
        email,
        contact,
        address,
      })
      newRestaurant.save()
      .then(() => res.json('Restaurant added!'))
      .catch(err => res.status(400).json('Error: ' + err));
    });
    
router.route('/:id').get((req, res) => {
    Restaurant.findById(req.params.id)
      .then(use => res.json(use))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports=router;