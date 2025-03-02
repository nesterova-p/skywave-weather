import HeroSection from '../components/HeroSection';
import DontGuess from "@/components/DontGuess";
import Forecast from "@/components/Forecast";
import Benefits from "../components/Benefits";

const Home = ( ) => {
    return (
        <section className="w-full flex-center flex-col">
            <>
                <HeroSection />
                <DontGuess/>
                <Forecast />
                <Benefits/>
            </>


        </section>
    )
}

export default Home