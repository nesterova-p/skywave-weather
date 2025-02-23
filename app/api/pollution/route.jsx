import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
    try {
        const lat = 52.2298;
        const lon = 21.0122;
        const apiKey = process.env.OPENWEATHERMAP_API_KEY;

        if (!apiKey) {
            throw new Error("Missing API Key");
        }

        const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;

        const res = await axios.get(url);
        return NextResponse.json(res.data);
    } catch (err) {
        console.error("Error fetching air data", err);
        return new Response("Error fetching air data", { status: 500 });
    }
}
