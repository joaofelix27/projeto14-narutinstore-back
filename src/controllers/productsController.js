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
  try {
<<<<<<< HEAD
    const products = await db.collection("inventory").findOne({name})
    if (products.length === 0) {
=======
    const products = await db.collection("inventory").findOne({name});
    if (!products) {
>>>>>>> 32ed221131caac93dbe7e6598ae4c1400a4a54f6
      return res.sendStatus(404);
    } else {
      res.status(200).send(products);
    }
  } catch {
    res.sendStatus(500);
  }
}
