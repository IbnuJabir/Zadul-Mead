"use server";

import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function getAllAnnouncements(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("zad");
      const collection = db.collection("announcements");
      const announcements = await collection.find().toArray();
      res.status(200).json(announcements);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
