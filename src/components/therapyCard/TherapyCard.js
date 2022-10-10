import './TherapyCard.css';

const TherapyCard = ({ therapy, imgLeft = false }) => {
    return (
        <div className="therapy-card-container row" data-testid={therapy.id}>
            <div
                className={`col-12 col-md pb-4 pe-0 ps-0 p-md-0 my-auto text-center text-md-start ${
                    !imgLeft && 'order-md-last text-md-end margin-end'
                }`}
            >
                <img src={therapy.img} alt={therapy.title} />
            </div>
            <div className="col-12 col-md p-0 my-auto">
                <h3>{therapy.title}</h3>
                <p>{therapy.text}</p>
            </div>
        </div>
    );
};

export default TherapyCard;
