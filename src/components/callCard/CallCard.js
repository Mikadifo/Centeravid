import CallButton from './../callButton/CallButton';
import numbers from './../../resources/info/numbers';
import './CallCard.css';

const CallCard = () => {
    return (
        <div className="call-card-container text-center">
            <h3>Llámanos o Escríbenos</h3>
            <div className="row g-0">
                {numbers.map((n) => (
                    <div className="col" key={n.id}>
                        <div className="d-inline-block">
                            <CallButton number={n.number} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default CallCard;
