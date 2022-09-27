import './TherapyCard.css';

const TherapyCard = ({ img, title, text }) => {
    return (
        <div className="therapy-card-container row">
            <div className="col p-0 my-auto">
                <img src={img} alt={title} />
            </div>
            <div className="col p-0 my-auto">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default TherapyCard;
