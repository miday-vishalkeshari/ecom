const express = require('express');
const { isAdmin, requireSignIn } = require('./../middlerwares/authMiddleware');
const { createCategoryController, updateCategoryController ,categoryController,singleCategoryController,deleteCategoryController} = require('./../controllers/categoryController');

const router = express.Router();

// Routes
//create category
router.post('/create-category', requireSignIn, createCategoryController);//isAdmin
//update category
router.put('/update-category/:id',requireSignIn,updateCategoryController);//isAdmin

//get all categories
router.get('/get-category',categoryController);

//single categorie
router.get('/single-category/:slug',singleCategoryController);

//delete category
router.delete('/delete-category/:id',requireSignIn,deleteCategoryController);//isAdmin

module.exports = router;
