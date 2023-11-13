const userModel = require('../model/userModel');
const {hashPassword,comparePassword} = require('../helpers/authHelper')
const JWT = require('jsonwebtoken');

const registerController = async (req, res) => {
    // Controller logic here
    try {
        const { name, email, password, phone, address} = req.body;

        //validation
        if(!name)
        {
            return res.send({message: "name is required"})
        }
        if(!email)
        {
            return res.send({message: "email is required"})
        }
        if(!password)
        {
            return res.send({message: "password is required"})
        }
        if(!phone)
        {
            return res.send({message: "phone is required"})
        }
        if(!address)
        {
            return res.send({message: "address is required"})
        }

        // check user
        const existingUser = await userModel.findOne({ email });

        if(existingUser)
        {
            return res.status(200).send({
                success: false,
                message: 'Already Register please login'
            });
        }
        else
        {
            //registration of new user
            const hashedPassword = await hashPassword(password);
            
            const role=false;
            //save
            const user =await  new userModel({
                name,email,password: hashedPassword,phone,address,role:role
            }).save();

            res.status(201).send({
                success: true,
                message: 'User Registration Successful',user
            })
        }      
    } catch (error) {
        console.log(`error in auth controller see in file(authController) --> ${error}`.bgRed.white);
        res.status(500).send({
            success: false,
            message: 'error in Registration',
            error
        });
    }
};

const loginController = async (req,res) => {
    try{
        const {email,password} = req.body

        //validation
        if(!email || !password)//not specifying what is invakid for security purposes
        {
            return res.status(404).send({
                success: false,
                message: 'Invalid Email or Password',
            });
        }

        //now lets see valid email password or not
        const user = await userModel.findOne({email});
        if(!user)
        {
            return res.status(404).send({
                success: false,
                message: ' Email is not Registered'
            })
        }
        
        const match = await comparePassword(password,user.password);
        if(!match)
        {
            return res.status(404).send({
                success: false,
                message: 'Invalid Password'
            });
        }

        //now if all okay then lets create token
        const token =  JWT.sign({_id: user._id},process.env.JWT_SECRET,{
            expiresIn: "7d",
        });

        res.status(200).send({
            success: true,
            message:'login Successful',
            user: {
                _id:user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role:user.role
            },
            token,
        })

    }catch(error){
        console.log('error in auth controoler loginController--> ${error}'.bgRed.white)
        res.status(500).send({
            success: false,
            message: 'error in login',
            error
        })
    }
};

const testController = async (req,res) => {
    try{
        return res.send('protected route')
    }catch(error){
        return res.send('error in testcontroller--> ${error}'.bgBlue.white);
    }
    
}

module.exports = {registerController,loginController,testController};
