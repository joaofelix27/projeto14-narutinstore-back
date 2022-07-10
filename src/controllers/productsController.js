import db from "../db/db.js";

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
  console.log(name);
  try {
    const products = await db.collection("inventory").findOne({name})
    if (products.length === 0) {
      return res.sendStatus(404);
    } else {
      res.status(200).send(products);
    }
  } catch {
    res.sendStatus(500);
  }
}
