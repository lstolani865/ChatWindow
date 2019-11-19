/*********************Task ROUTES***************************/
const express = require('express')
const router = express.Router();
const Task = require("../models/product");

//Route to direct use to Add Task form
router.get("/add",(req,res)=>
{
    res.render("product/productdashboard")
});

router.post("/add",(req,res)=>
{
    const newproduct=
    {
        title:req.body.title,
        price:req.body.price,
        quantity:req.body.quantity,
        description : req.body.description,
        taxable:req.body.taxable,
    }

    const product = new product(newproduct)
        product.save()
        .then(()=>{
            console.log(`product was added to the database`);
            console.log(`${product}`);
            res.redirect("/product/list");
        
        })
        .catch(err=>console.log(`Error : ${err}`));
  
}); 

router.get("/list",(req,res)=>
{

    product.find()
    .then((tasks)=>{
        res.render("product/list",
        {
            lists:product
        });
    })
    .catch(err=>console.log(`Error : ${err}`));
});


router.get("/list",(req,res)=>
{

    product.find()
    .then((tasks)=>{
        res.render("product/list",
        {
            lists:product
        });
    })
    .catch(err=>console.log(`Error : ${err}`));
});

module.exports= router;

