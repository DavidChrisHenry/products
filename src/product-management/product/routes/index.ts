/** @format */
import { Router, Request, Response } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/product-service";
import { IProduct } from "../schema/products.schema";

const productRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Products management
 */

/**
 * @swagger
 * /api/product:
 *   get:
 *     summary: Retrieve a list of products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
productRouter.get("/", async (req: Request, res: Response) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

/**
 * @swagger
 * /api/product/{id}:
 *   get:
 *     summary: Retrieve a single product by ID
 *     tags: [Products]
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
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: product not found
 */
productRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const product = await getProductById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).send(error);
  }
});

/**
 * @swagger
 * /api/product:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: The created product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Server error
 */
productRouter.post("/", async (req: Request, res: Response) => {
  const newProduct: IProduct = req.body;
  try {
    const createdProduct = await createProduct(newProduct);
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).send(error);
  }
});

/**
 * @swagger
 * /api/product/{id}:
 *   put:
 *     summary: Update an existing product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The updated product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: product not found
 */
productRouter.put("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const updatedproduct = await updateProduct(id, req.body);
    res.status(200).json(updatedproduct);
  } catch (error) {
    res.status(404).send(error);
  }
});

/**
 * @swagger
 * /api/product/{id}:
 *   delete:
 *     summary: Delete a product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID
 *     responses:
 *       200:
 *         description: product deleted successfully
 *       404:
 *         description: product not found
 */
productRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await deleteProduct(id);
    res.status(200).send("Product deleted successfully");
  } catch (error) {
    res.status(404).send(error);
  }
});

export default productRouter;
