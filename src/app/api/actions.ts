"use server";
import { MongoClient } from "mongodb";


const username = encodeURIComponent("kaviru");
const password = encodeURIComponent("kaviru@BC1");
const cluster = "tdgdb.mbsvayl.mongodb.net";
const dbName = "tdgdb";
const authSource = "admin";
const authMechanism = "SCRAM-SHA-1";

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
        await db.collection("test").createIndex({ email: 1 }, { unique: true });
        console.log("Database initialized");
    } catch (err: any) {
        console.error("Error initializing database:", err.message);
    }
}
initializeDb();

async function checkUserExists(email: string): Promise<boolean> {
    const db = await getDbConnection();
    const user = await db.collection("test").findOne({ email });
    return !!user;
}

export async function taskSubmit(formData: any) {
    console.log(formData);
    try {
        if (!formData.email) throw new Error("No Email provided");
        if (!formData.post) throw new Error("No Content provided");

        const exists = await checkUserExists(formData.email);
        if (exists) throw new Error("User already exists");

        const newSubmission = {
            name: formData.name,
            lname: formData.lname,
            email: formData.email,
            post: formData.post,
            created: new Date(new Date().getTime())
        };

        const db = await getDbConnection();
        await db.collection("test").insertOne(newSubmission);
        console.log("New Submission added to the database");
    }
    catch (err) {
        console.error("Error adding submission to the database:", err);
        throw err;
    }
}

//create a new function to get all the submissions
export async function getAllSubmissions() {
    const db = await getDbConnection();
    return db.collection("test").find().toArray();
}