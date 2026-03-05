import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  try {
    // Set your MongoDB connection URI as an environment variable
    const uri = process.env.MONGODB_URI;

    // Connect to MongoDB
    const client = await MongoClient.connect(uri);
    const db = client.db(process.env.DB_NAME); // Use a separate environment variable for the database name

    // Fetch data from the team-data collection
    const teamDataCollection = db.collection("team-data");
    const teamData = await teamDataCollection.find({}).toArray();

    // Close the connection
    client.close();

    // Send the data as JSON response
    res.status(200).json({ teamData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
