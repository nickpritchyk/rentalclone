import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import "../styles/Home.css";
import BoatCard from "../components/BoatCard";

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <div className="card-deck">
                <BoatCard />
                <BoatCard />
                <BoatCard />
                <BoatCard />
                <BoatCard />
                <BoatCard />
            </div>
        </div>


    )
}