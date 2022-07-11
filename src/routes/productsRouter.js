import { Router } from 'express';
import validateUser from '../middlewares/validateUserMiddleware.js';
import { chosenProduct, productList, updateProducts} from '../controllers/productsController.js';

const productsRouter = Router();
productsRouter.get("/products", productList);
productsRouter.put("/products", validateUser, updateProducts);
productsRouter.get("/products/:name", chosenProduct);

export default productsRouter;