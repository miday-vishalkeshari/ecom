const CategoryModel = require('./../model/CategoryModel');
const slugify = require('slugify')

const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({
        message: 'name is required',
      });
    }

    const existingCategory = await CategoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: true,
        message: 'Category Already Exists',
      });
    }

    const category = await new CategoryModel({ name, slug: slugify(name) }).save();
    res.status(201).send({
      success: true,
      message: 'New Category Created',
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: 'error in category',
    });
  }
};

const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await CategoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Category Updated Successfully",
      category
    });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      error,
    })
  }
}
const categoryController = async (req, res) => {
  try {
    const category = await CategoryModel.find({});
    res.status(200).send({
      success: true,
      message: 'All categories list',
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'error while getting all categoes',
      error,
    });
  }
};

const singleCategoryController = async (req, res) => {
  try {
    const category = await CategoryModel.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: 'Get single category successfully',
      category,
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in getting single category',
      error,
    })
  }
}

const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    await CategoryModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: 'category deleted sucessfully',
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in deleting Category',
      error,
    })
  }
}
module.exports = { createCategoryController, updateCategoryController, categoryController, singleCategoryController, deleteCategoryController };
