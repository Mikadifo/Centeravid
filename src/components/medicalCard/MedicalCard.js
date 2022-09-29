import './MedicalCard.css';

const MedicalCard = ({ name, role, img }) => {
    return (
        <div className="medical-card-container d-flex">
            <img src={img} alt={role} />
            <div className="my-auto">
                <h5>{name}</h5>
                <p>{role}</p>
            </div>
        </div>
    );
};

export default MedicalCard;
