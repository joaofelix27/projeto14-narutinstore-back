import { Router } from 'express';
import { productList } from '../controllers/productsController';

const productsRouter = Router();
productsRouter.get("/products", productList);

export default productsRouter;