import { db, objectId } from "../db/db.js";

async function validateUser(req, res, next) {
  const { authorization } = req.headers;
  console.log(authorization)
  const token = authorization?.replace("Bearer ", "");
  console.log(token)

  // Verify if the token is valid
  const session = await db.collection("sessions").findOne({ token });

  if (!session) {
    return res.status(401).send("Token inválido");
  }
  const activeUser = await db
    .collection("users")
    .findOne({ _id: new objectId(session.userId) });
  if (!activeUser) {
    return res.sendStatus(401);
  }
  delete activeUser.password;
  res.locals.activeUser = activeUser;

  next();
}

export default validateUser;
