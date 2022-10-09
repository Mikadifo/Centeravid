import CallButton from './../callButton/CallButton';
import numbers from './../../resources/info/numbers';
import './CallCard.css';

const CallCard = () => {
    return (
        <div
            className="call-card-container text-center"
            data-testid="call-card"
        >
            <h3>Llámanos o Escríbenos</h3>
            <div className="row g-4 g-xl-0">
                {numbers.map((n) => (
                    <div className="col-12 col-xl-6" key={n.id}>
                        <div className="d-inline-block">
                            <CallButton text={n.number} testid={n.id} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="email-card-container">
                <h3>¿Prefieres usar correo?</h3>
                <div className="d-inline-block">
                    <CallButton
                        text="centeravid@hotmail.com"
                        isEmail={true}
                        testid="E-clinic"
                    />
                </div>
            </div>
        </div>
    );
};
export default CallCard;
