import './PlantCard.css';

const PlantCard = ({ plant }) => {
    return (
        <div
            className="plant-card-container text-center"
            data-testid={plant.id}
        >
            <h4>{plant.title}</h4>
            <img src={plant.img} alt={plant.title} />
        </div>
    );
};

export default PlantCard;
