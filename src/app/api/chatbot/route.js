// /app/api/chatbot/route.js

import dbConnect from "../../../lib/dbConnect";
import Chatbotschema from "../../../models/chatbotschema";

export async function GET() {
  try {
    await dbConnect();
    const responses = await Chatbotschema.find({}).sort({ createdAt: -1 });;
    return new Response(JSON.stringify(responses), { status: 200 });
  } catch (error) {
    return new Response("Error fetching responses", { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();

    const { name, email, phone, query } = body;
    if (!name || !email || !phone || !query) {
      return new Response(JSON.stringify({ message: "Missing fields" }), {
        status: 400,
      });
    }

    const newEntry = await Chatbotschema.create({
      name,
      email,
      phoneNumber: phone,
      queryString: query,
    });

    return new Response(JSON.stringify(newEntry), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
    });
  }
}

export async function PATCH(req) {
  try {
    await dbConnect();
    const { id, status } = await req.json();

    if (!id || !status)
      return new Response(JSON.stringify({ message: "ID & status required" }), {
        status: 400,
      });

    const updated = await Chatbotschema.findByIdAndUpdate(
      id,
      { status }, // ONLY status updates
      { new: true }
    );

    if (!updated) return new Response("Entry Not Found", { status: 404 });

    return new Response(JSON.stringify(updated), { status: 200 });
  } catch (error) {
    return new Response("Update Failed", { status: 500 });
  }
}
