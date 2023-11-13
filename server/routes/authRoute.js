const express = require('express')
const {registerController,loginController,testController} = require('../controllers/authController')
const {requireSignIn,isAdmin} = require('../middlerwares/authMiddleware')

//router object
const router = express.Router();

//routing
//register|| method post
router.post('/register',registerController);

//login|| method post
router.post('/login',loginController);

// //test routes///////////////////////////////////////////////////////////////
// router.get('/test',requireSignIn,isAdmin,testController);

//protected routes
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
});

router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
});

module.exports = router;