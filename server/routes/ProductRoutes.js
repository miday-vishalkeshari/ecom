const express = require('express')
const {requireSignIn,isAdmin} = require('./../middlerwares/authMiddleware')
const {createProductController,getProductController
        ,getSingleProductController,
        productPhotoController} = require('./../controllers/productController')
// const formidable = require('express-formidable')


const router = express.Router();

router.post('/create-product',requireSignIn,createProductController);//isAdmin   and (requireSignIn ke bad formidable() )
router.get('/get-product',requireSignIn,getProductController);//isAdmin   
router.get('/get-product/:slug',requireSignIn,getSingleProductController);
router.get('/delete-product/:pid',requireSignIn,getSingleProductController);///isAdmin
router.get('/product-photo/:pid',requireSignIn,productPhotoController);//isAdmin      

module.exports = router;