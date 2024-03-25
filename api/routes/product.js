const router = require('express').Router()

const Product = require('../models/Product');

const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

// CREATE A PRODUCT
router.post("/", verifyTokenAndAdmin, async(req, res) => {
    const newProduct = new Product(req.body)

    try{
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct) 
    }catch(err){
        res.status(500).json(err)
    }
})

// UPDATE A PRODUCT
router.put("/:id", verifyTokenAndAdmin, async(req, res) => {
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedProduct)
    }catch(err){
        res.status(500).json(err)
    }
})

// DELETE A PRODUCT
router.delete("/:id", verifyTokenAndAdmin, async(req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Product has been deleted"})
    }catch(err){
        res.status(500).json(err)
    }
})

// GET A PRODUCT
router.get("/find/:id", async(req, res) => {
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    }catch(err){
        res.status(500).json(err)
    }
})

// GET ALL PRODUCTS
router.get("/", async(req, res) => {
    const qNew = req.query.new
    const qCategotry = req.query.category

    try{
        let products;

        if(qNew){
            products = await Product.find().sort({ createdAt: -1 }).limit(1)
        }else if(qCategotry){
            products = await Product.find({ categories: {
                $in: [qCategotry]
            }})
        }else{
            products = await Product.find()
        }
        res.status(200).json(products)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;