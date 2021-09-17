import Hero from '../component/hero';
import Homepage from '../component/homepage';
import Navigation from '../component/navigation';
import LatLngContext from '../context/LatLngContext';
export default function Home() {
    return (
        <>
            <Navigation />
            <Hero />
            <Homepage />
        </>
    )
}