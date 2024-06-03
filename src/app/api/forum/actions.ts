'use server'
import { MongoClient } from "mongodb";
import { title } from "process";

const username = encodeURIComponent("kaviru");
const password = encodeURIComponent("kaviru@BC1");
const cluster = "tdgdb.mbsvayl.mongodb.net";
const dbName = "tdgdb";
const authSource = "admin";
const authMechanism = "SCRAM-SHA-1";
const collectionName = "post";

let uri = `mongodb+srv://${username}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority&authSource=${authSource}&authMechanism=${authMechanism}`;

const client = new MongoClient(uri);

async function getDbConnection() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        return client.db(dbName);
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        throw err;
    }
}

async function initializeDb() {
    const db = await getDbConnection();
    try {
        await db.collection(collectionName).createIndex({ email: 1 }, { unique: true });
        console.log("Database initialized");
    } catch (err: any) {
        console.error("Error initializing database:", err.message);
    }
}
initializeDb();

async function checkUserExists(email: string): Promise<boolean> {
    const db = await getDbConnection();
    const user = await db.collection(collectionName).findOne({ email });
    return !!user;
}

export async function postSubmit(formData: any) {
    console.log(formData);
    try {
        if (!formData.title) throw new Error("No Title provided");
        if (!formData.content) throw new Error("No Content provided");

        // const exists = await checkUserExists(formData.email);
        // if (exists) throw new Error("User already exists");

        const newSubmission = {
            name: formData.name,
            lname: formData.lname,
            email: formData.email,
            title: formData.title,
            post: formData.content,
            created: new Date(new Date().getTime())
        };

        const db = await getDbConnection();
        await db.collection(collectionName).insertOne(newSubmission);
        console.log("Submission saved to database");
    } catch (err: any) {
        console.error("Error saving submission:", err.message);
        throw err;
    }
}