const router = require('express').Router()

const Cart = require('../models/Cart');

const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

// CREATE A Cart
router.post("/", verifyToken, async(req, res) => {
    const newCart = new Cart(req.body)

    try{
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct) 
    }catch(err){
        res.status(500).json(err)
    }
})

// UPDATE A Cart
router.put("/:id", verifyTokenAndAuthorization, async(req, res) => {
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedCart)
    }catch(err){
        res.status(500).json(err)
    }
})

// DELETE A CART
router.delete("/:id", verifyTokenAndAuthorization, async(req, res) => {
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Cart has been deleted"})
    }catch(err){
        res.status(500).json(err)
    }
})

// GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, async(req, res) => {
    try{
        const cart = await Cart.findOne({ userId: req.params.userId })
        res.status(200).json(cart)
    }catch(err){
        res.status(500).json(err)
    }
})

// GET ALL 
router.get("/", verifyTokenAndAdmin, async(req, res) => {
    try{
        const carts = await Cart.find()
        res.status(200).json(carts)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;