import { Router } from 'express';
import { chosenProduct, productList } from '../controllers/productsController.js';

const productsRouter = Router();
productsRouter.get("/products", productList);
productsRouter.get("/products/:name", chosenProduct);

export default productsRouter;