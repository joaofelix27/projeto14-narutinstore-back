import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();


const mongoClient = new MongoClient(process.env.URL_CONNECT_MONGO);
const objectId= ObjectId
await mongoClient.connect();

const db = mongoClient.db("NarutinDataBase");
export {db,objectId}