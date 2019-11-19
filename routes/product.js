/*********************Task ROUTES***************************/
const express = require('express')
const router = express.Router();
const Task = require("../models/product");

//Route to direct use to Add Task form
router.get("/",(req,res)=>
{
    res.render("product/productdashboard")
});

router.get("/add",(req,res)=>
{
    res.render("product/productaddform")
});

router.post("/add",(req,res)=>
{
    const newproduct=
    {
        title:req.body.title,
        price:req.body.price,
        quantity:req.body.quantity,
        description : req.body.description,
        taxable:req.body.taxable
    }

    const product = new Task(newproduct)

    product.save()
    .then(()=>{
        console.log(`product was added to the database`);
        console.log(`${product}`);
        res.redirect("/list");
    })
    .catch(err=>console.log(`Error : ${err}`));
  
}); 

router.get("/list",(req,res)=>
{
    Task.find()
    .then((products)=>{
        res.render("product/productList",
        {
            lists: products
        });
    })
    .catch(err=>console.log(`Error : ${err}`));
});


//Route to direct user to edit task form
router.get("/edit/:id",(req,res)=>
{
    Task.findById(req.params.id)
    .then((product)=>{

        res.render("product/producteditform",{
            productDocument:product
        })

    })
    .catch(err=>console.log(`Error : ${err}`));
});


router.put("/edit/:id",(req,res)=>
{
    product.findById(req.params.id)
    .then((task)=>{

        product.title=req.body.title;
        product.description=req.body.description;
        product.quantity=req.body.quantity;
        product.price=req.body.price;
        product.taxable=req.body.taxable;
        

        product.save()

        .then(()=>{
           res.redirect("/product/list") 
        })
        .catch(err=>console.log(`Error : ${err}`));

    })
    .catch(err=>console.log(`Error : ${err}`));
});


module.exports= router;

