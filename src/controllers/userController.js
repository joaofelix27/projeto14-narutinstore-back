import db from "../db/db.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

  
export async function registerUser(req, res) {
    let { email, name, cpf, password } = req.body;
  
    const encryptedPassword = bcrypt.hashSync(password, 10);
  
    try {
      const alreadyExists = await db
        .collection("users")
        .find({ email: email })
        .toArray();
      if (alreadyExists.length === 0) {
        await db
          .collection("users")
          .insertOne({ ...req.body, password: encryptedPassword });
        res.sendStatus(201);
      } else {
        res.sendStatus(409);
      }
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }