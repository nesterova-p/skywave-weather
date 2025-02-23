import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
    try {
        const lat = 52.2298;
        const lon = 21.0122;

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=uv_index_max,uv_index_clear_sky_max&timezone=auto&forecast_days=1`;

        const res = await axios.get(url);
        return NextResponse.json(res.data);
    } catch (err) {
        console.error("Error fetching air data", err);
        return new Response("Error fetching air data", { status: 500 });
    }
}
