import Card from './Card';
import './CardContainer.css';

const CardContainer = (props) => {
    const beerCards = props.allBeers.map(beer => {
        return (<Card 
            id={beer.id}
            name={beer.name}
            tagline={beer.tagline}
            description={beer.description}
            imageUrl={beer.image_url}
            expandView={props.expandView}
            key={beer.id}
        />)
    })
    return (
        <div className="CardContainer">
            { beerCards }
        </div>
    )
}

export default CardContainer;
