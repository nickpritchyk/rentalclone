import "../styles/BoatCard.css";

function BoatCard() {
    return(
        
        <div className="boat-card">
            <div className="image">
                <img src="/img/boat1.jpg" alt="Boat"></img>
            </div>
            <div className="boat-title">
                <h3> Boat </h3>
            </div>
            <div className="description"> 
                <p> 2021 Yacht </p> 
            </div>
        </div>
    )
}

export default BoatCard;