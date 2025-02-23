"use client";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { useGlobalContext } from "@/app/context/globalContext";

function FlyToActiveCity({ cityCoord }) {
    const map = useMap();

    useEffect(() => {
        if (cityCoord) {
            const zoomLevel = 13;
            const flyToOption = {
                duration: 1.5,
            };
            map.flyTo([cityCoord.lat, cityCoord.lon], zoomLevel, flyToOption);
        }
    },
        [cityCoord]);

    return null;
}

export default function Mapbox() {
    const { forecast } = useGlobalContext();
    const cityCoord = forecast?.coord;

    if (!forecast || !cityCoord) {
        return <div><h1>Loading...</h1></div>;
    }

    return (
        <div className="flex-1 basis-[50%] border rounded-lg shadow-md dark:shadow-none h-[400px]">
            <MapContainer
                center={[cityCoord.lat, cityCoord.lon]}
                zoom={13}
                scrollWheelZoom={true}
                className="rounded-lg"
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                <FlyToActiveCity
                    cityCoord={cityCoord}
                />
            </MapContainer>
        </div>
    );
}
