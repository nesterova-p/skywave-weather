import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req) {
    try {
        const lat = 52.2298;
        const lon = 21.0122;
        const apiKey = process.env.OPENWEATHERMAP_API_KEY;

        if (!apiKey) {
            throw new Error("Missing API Key");
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

        const res = await axios.get(url);
        return NextResponse.json(res.data);
    } catch (error) {
        console.error("Error fetching forecast data", error);

        return new Response("Error fetching forecast data", {
            status: 500,
        });
    }
}
