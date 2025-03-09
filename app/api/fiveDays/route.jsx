import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const lat = searchParams.get("lat");
        const lon = searchParams.get("lon");

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
