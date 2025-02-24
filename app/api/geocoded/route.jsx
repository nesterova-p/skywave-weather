import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const apiKey = process.env.OPENWEATHERMAP_API_KEY;
        const searchParams = new URL(req.url).searchParams;

        const city = searchParams.get("search");

        if (!city) {
            return new Response("Missing city parameter", { status: 400 });
        }

        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;


        const res = await axios.get(url);

        return NextResponse.json(res.data);
    } catch (error) {
        console.error("Error fetching geo data:", error.message);
        return new Response("Error fetching geo data", { status: 500 });
    }
}
