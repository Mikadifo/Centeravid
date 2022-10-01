import './MedicalCard.css';

const MedicalCard = ({ body }) => {
    return (
        <div className="medical-card-container d-flex" data-testid={body.id}>
            <img src={body.img} alt={body.role} />
            <div className="my-auto">
                <h5>{body.name}</h5>
                <p>{body.role}</p>
            </div>
        </div>
    );
};

export default MedicalCard;
