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

        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

        const response = await fetch(url, {
            next: { revalidate: 900 },
        });
        const uv = await response.json();

        return NextResponse.json(uv);
    } catch (err) {
        console.error("Error getting uv:", err.message);
        return new Response("Error fetching UV data", { status: 500 });
    }
}
