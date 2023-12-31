import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../errors/bad-request-error";
import { NotFoundError } from "../errors/not-found-error";
import { Category, ICategoryDoc } from "../models/category";
import { increaseOrder, slugname } from "../utils";

/**
 * All categories
 * @param req
 * @param res
 * @param next
 */
const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = (await Category.find()) as ICategoryDoc[];
    return res.status(200).send(categories);
  } catch (error) {
    next(error);
  }
};

/**
 * Add category
 * @param req
 * @param res
 * @param next
 */
let order = 0;
const addCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = (await Category.find()) as ICategoryDoc[];
    const { title } = req.body;

    const slug = slugname(title);
    const category = (await Category.findOne({ slug })) as ICategoryDoc;
    if (category) {
      throw new BadRequestError("Category already existed!");
    }

    const newCat = new Category({
      title,
      slug,
      order: increaseOrder(categories),
    });

    const result = await newCat.save();
    return res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

/**
 * Update category
 * @param req
 * @param res
 * @param next
 * @returns
 */
const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const status = req.query?.status;
    if (status) {
      return await activeInactiveCategory(req, res, next);
    }

    const { title } = req.body;
    const categoryId = req.params.categoryId;

    const category = await Category.findById(categoryId);
    if (!category) {
      throw new BadRequestError("Category not found!");
    }

    const result = await Category.findByIdAndUpdate(
      { _id: categoryId },
      {
        $set: {
          title,
          slug: slugname(title),
        },
      },
      { new: true }
    );

    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param req
 * @param res
 * @param next
 */
const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categoryId = req.params.categoryId;
    const cateogry = await Category.findById(categoryId);
    if (!cateogry) {
      throw new NotFoundError("Category not found!");
    }
    await Category.findByIdAndDelete(categoryId);
    return res.status(200).send({ id: categoryId });
  } catch (err) {
    next(err);
  }
};

const activeInactiveCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const categoryId = req.params.categoryId;
  const status = req.query?.status;
  try {
    const category = await Category.findById(categoryId);

    if (!category) {
      throw new NotFoundError("Category not found!");
    }

    if (status === "active") {
      category.active = true;
    }

    if (status === "inactive") {
      category.active = false;
    }

    await category.save();
    return res.status(200).send(category);
  } catch (err) {
    next(err);
  }
};

// export
export { getCategories, addCategory, updateCategory, deleteCategory };
