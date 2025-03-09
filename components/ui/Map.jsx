"use client";
import dynamic from "next/dynamic";

const MapNoSSR = dynamic(() => import("./MapNoSSR"), {
    ssr: false
});

export default function Map(props) {
    return <MapNoSSR {...props} />;
}
