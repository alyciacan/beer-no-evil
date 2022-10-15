import './Card.css';

const Card = (props) => {
    const id = props.id
    return (
        <div className="Card" onClick={() => props.expandView(id)}>
            <img src={props.imageUrl} className="cardImg" />
            <div className="cardText">
                <h2 className="beerName">{props.name}</h2>
                <h3><i>{props.tagline}</i></h3>
                <hr></hr>
                <br />
                <p>{props.description}</p>
            </div>
        </div>
    )
} 

export default Card;