import HeroSection from '../components/HeroSection';
import DontGuess from "@/components/DontGuess";
import Forecast from "@/components/Forecast";

const Home = ( ) => {
    return (
        <section className="w-full flex-center flex-col">
            <>
                <HeroSection />
                <DontGuess/>
                <Forecast/>

            </>


        </section>
    )
}

export default Home