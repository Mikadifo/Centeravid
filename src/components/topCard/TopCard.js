import './TopCard.css';

const TopCard = ({ title, subtitle }) => {
    return (
        <div className="top-card-container text-center">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
        </div>
    );
};

export default TopCard;
