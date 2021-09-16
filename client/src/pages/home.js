import Hero from '../component/hero';
import Homepage from '../component/homepage';
import Navigation from '../component/navigation';
export default function Home({ getPlaceLatLng }) {
    return (
        <>
            <Navigation />
            <Hero getPlaceLatLng={ getPlaceLatLng } />
            <Homepage />
        </>
    )
}