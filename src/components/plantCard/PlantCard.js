import './PlantCard.css';

const PlantCard = ({ title, img }) => {
    return (
        <div className="plant-card-container text-center">
            <h4>{title}</h4>
            <img src={img} alt={title} />
        </div>
    );
};

export default PlantCard;
