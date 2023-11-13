const  slugify  = require('slugify');
const productModel = require('./../model/ProductModel')
const fs = require('fs')

const createProductController= async (req,res)=>{
try{
    const {name,slug,description,price,category,quantity,shipping} =req.fields;
    const {photo} = req.files;

    if(!name)
    {
        return res.status(500).send({
            error:'name is required',
        })
    }
    if(!description)
    {
        return res.status(500).send({
            error:'description is required',
        })
    }
    if(!price)
    {
        return res.status(500).send({
            error:'price is required',
        })
    }
    if(!category)
    {
        return res.status(500).send({
            error:'category is required',
        })
    }
    if(!quantity)
    {
        return res.status(500).send({
            error:'quantity is required',
        })
    }
    if(!shipping)
    {
        return res.status(500).send({
            error:'shipping is required',
        })
    }
    if(photo && photo.size>1000000)
    {
        return res.status(500).send({
            error:'photo is required and should be less than 1mb',
        })
    }

    const products = new productModel({...req.fields,slug:slugify(name)})
    if(photo)
    {
        products.photo.data = fs.readFileSync(photo.path)
        products.photo.contentType = photo.type
    }

    await products.save();
    res.status(201).send({
        success:true,
        message:'product Created Succesfully',
        products,
    });

}catch(error){
    console.log(error);
    res.status(500).send({
        success:false,
        message:'error in creating product',
        error
    })
}
}

const getProductController= async(req,res)=>{
    try{
        const products = await productModel
        .find({})
        .populate("category")
        .select("-photo")
        .limit(12)
        .sort({createdAt:-1})
        res.status(200).send({
            success:true,
            message:'got all products ',
            products,
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:'error in get all products',
            error,
        })
    }
}

const getSingleProductController = async(req,res)=>{
    try {
        const product = await productModel
          .findOne({ slug: req.params.slug })
          .select("-photo")
          .populate("category");
        res.status(200).send({
          success: true,
          message: "Single Product Fetched",
          product,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Eror while getitng single product",
          error,
        });
      }
}

// get photo
export const productPhotoController = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.pid).select("photo");
        console.log(req.params.pid)
        if (product?.photo?.data) {
          res.set("Content-type", product.photo.contentType);
          return res.status(200).send(product.photo.data);
        }
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Erorr while getting photo",
          error,
        });
      }
  };

module.exports= {createProductController,getProductController,getSingleProductController,productPhotoController};