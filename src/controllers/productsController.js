import db from '../db.js';

export async function productList(req, res){
    try{
        const products = await db.collection("inventory").find().toArray();
        res.status(200).send(products)
    }

    catch{
        res.sendStatus(500);
    }
}