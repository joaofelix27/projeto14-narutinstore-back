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
    const cpfExists = await db.collection("users").find({ cpf }).toArray();
    if (cpfExists.length !== 0) {
        return res.sendStatus(408);
    }
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

export async function loginUser(req, res) {
  let { email, password } = req.body;
  try {
    const loginData = await db.collection("users").findOne({ email: email });
    const name = loginData.name;
    const verifyPassword = bcrypt.compareSync(password, loginData.password);
    if (loginData.length !== 0) {
      if (email == loginData.email && verifyPassword) {
        const token = uuid();
        await db.collection("sessions").insertOne({
          token,
          userId: loginData._id,
        });
        res.status(200).send({ token, name });
      } else {
        res.status(401).send("E-mail ou senha inválidos!");
      }
    } else {
      res.status(401).send("E-mail ou senha inválidos!");
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function logOut(req, res){
  const { authorization } = req.headers;
  const token = authorization.replace('Bearer ', '');
  const session=await db.collection("sessions").findOne({token: token});
  db.collection("sessions").deleteOne(session);
  res.sendStatus(200)
}