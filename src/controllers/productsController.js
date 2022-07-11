import {db} from "../db/db.js";

export async function productList(req, res) {
  try {
    const products = await db.collection("inventory").find().toArray();
    res.status(200).send(products);
  } catch {
    res.sendStatus(500);
  }
}
export async function chosenProduct(req, res) {
  const name = req.params.name;
  try {
    const products = await db.collection("inventory").findOne({ name });
    if (!products) {
      return res.sendStatus(404);
    } else {
      res.status(200).send(products);
    }
  } catch {
    res.sendStatus(500);
  }
}
export async function updateProducts(req, res) {
  
  try {
    for ( let i = 0; i < req.body.length; i++) {
      const { name, quantity, quantityPurchased } = req.body[i];
      const newInventoryNumber = quantity - quantityPurchased;
      const products = await db.collection("inventory").updateOne(
        { name },
        {
          $set: {
            quantity: newInventoryNumber,
          },
        }
      );
    }
      res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
}
