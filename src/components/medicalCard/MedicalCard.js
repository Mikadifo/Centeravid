import './MedicalCard.css';

const MedicalCard = ({ name, rol, img }) => {
    return (
        <div className="medical-card-container d-flex">
            <img src={img} alt={rol} />
            <div className="my-auto">
                <h5>{name}</h5>
                <p>{rol}</p>
            </div>
        </div>
    );
};

export default MedicalCard;
