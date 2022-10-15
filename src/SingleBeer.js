import './SingleBeer.css';

const SingleBeer = (props) => {
    console.log(props.currentBeer)
    return (
    <section className="singleBeerView">
        <img className="singleBeerImg" src={props.currentBeer.image_url} />
        <h2 className="beerName">{props.currentBeer.name}</h2>
        <h3>{props.currentBeer.tagline}</h3>
        <p>{props.currentBeer.description}</p>
        <p>Alcohol by Volume: {props.currentBeer.abv}</p>
        <p>Recommended Food Pairings: <ul>{props.currentBeer.food_pairing.map(food => <li>{food}</li>)}</ul></p>
    </section>
    )
}

export default SingleBeer;