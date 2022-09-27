import './TextCard.css';

const TextCard = ({ title, text }) => {
    return (
        <div className="text-card-container">
            <h3>{title}</h3>
            {text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
            ))}
        </div>
    );
};

export default TextCard;
