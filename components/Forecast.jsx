import Temperature from '../components/ui/Temperature.jsx'
import AirPollution from "@/components/ui/AirPollution";
import Sunset from '../components/ui/Sunset';
import Wind from '../components/ui/Wind';
import DailyForecast from "@/components/ui/DailyForecast";
import UVIndex from "@/components/ui/UVindex";
import Population from "@/components/ui/Population";
import FeelsLike from "@/components/ui/FeelsLike"
import Humidity from "@/components/ui/Humidity";
import Visibility from "@/components/ui/Visibility";
import Pressure from "@/components/ui/Pressure";
import Map from "../components/ui/Map";
import LargeCities from "@/components/ui/LargeCities";
import FiveDayForecast from "@/components/ui/FiveDayForecast";

export default function Forecast() {
    return(
    <main id="forecast-section" className={"mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[8rem] m-3"}>
        <div className={"pb-4 flex flex-col gap-4 md:flex-row"}>
            <div className={"flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]"}>
                <Temperature/>
                <FiveDayForecast/>
            </div>
            <div className={"flex flex-col w-full"}>
                <div className={"instruments grid h-full gap-4 col-span-full sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4"}>
                    <FeelsLike/>
                    <Sunset/>
                    <UVIndex/>
                    <Wind/>
                    <DailyForecast/>
                    <Visibility/>
                    <Humidity/>
                    <AirPollution/>
                    <Pressure/>
                    <Population/>
                </div>
                <div className={"mapbox-ct mt-4 flex gap-4 "}>
                    <Map/>
                    <LargeCities/>
                </div>
            </div>
        </div>
    </main>
    );
}