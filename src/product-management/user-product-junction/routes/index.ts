/** @format */
import { Router, Request, Response } from "express";
import {
  getAllUserProducts,
  getUserProductById,
  createUserProduct,
} from "../services/user-product-service";
import { IUserProduct } from "../schema/user-product.schema";

const userProductRouter = Router();

/**
 * @swagger
 * tags:
 *   name: BuyProduct
 *   description: Buy Products management
 */

/**
 * @swagger
 * /api/buy-product:
 *   get:
 *     summary: Retrieve a list of user bill buy products
 *     tags: [BuyProduct]
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserProduct'
 */
userProductRouter.get("/", async (req: Request, res: Response) => {
  try {
    const products = await getAllUserProducts();
    res.json(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

/**
 * @swagger
 * /api/buy-product/{id}:
 *   get:
 *     summary: Retrieve a single user bill product by ID
 *     tags: [BuyProduct]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID
 *     responses:
 *       200:
 *         description: A product object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserProduct'
 *       404:
 *         description: product not found
 */
userProductRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const product = await getUserProductById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).send(error);
  }
});

/**
 * @swagger
 * /api/buy-product:
 *   post:
 *     summary: Created bill user buy product
 *     tags: [BuyProduct]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserProduct'
 *     responses:
 *       201:
 *         description: The created bill user buy product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserProduct'
 *       500:
 *         description: Server error
 */
userProductRouter.post("/", async (req: Request, res: Response) => {
  const newUserProduct: IUserProduct = req.body;
  try {
    const createdUserProduct = await createUserProduct(newUserProduct);
    res.status(201).json(createdUserProduct);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default userProductRouter;
