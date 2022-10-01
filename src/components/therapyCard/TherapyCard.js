import './TherapyCard.css';

const TherapyCard = ({ therapy, imgLeft = false }) => {
    return (
        <div className="therapy-card-container row" data-testid={therapy.id}>
            <div
                className={`col p-0 my-auto ${
                    !imgLeft && 'order-last text-end'
                }`}
            >
                <img src={therapy.img} alt={therapy.title} />
            </div>
            <div className="col p-0 my-auto">
                <h3>{therapy.title}</h3>
                <p>{therapy.text}</p>
            </div>
        </div>
    );
};

export default TherapyCard;
