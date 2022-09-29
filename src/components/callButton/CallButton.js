import { useState } from 'react';
import '././CallButton.css';

const CallButton = ({ number }) => {
    const [numberText, setNumberText] = useState(number);

    const copyNumber = async () => {
        setNumberText('Copiado!');
        await navigator.clipboard.writeText(number);
        setTimeout(() => setNumberText(number), 1000);
    };

    return (
        <div className="call-button-container d-flex">
            <h4 className="my-auto">{numberText}</h4>
            <div className="my-auto">
                <span onClick={copyNumber}>
                    <i className="bi bi-back" />
                </span>
                <a href={`tel:${number}`}>
                    <i className="bi bi-telephone" />
                </a>
                <a
                    href={`https://wa.me/593${number.substring(
                        1,
                        number.length,
                    )}?text=Hola%20Centeravid,%20me%20gustaria%20saber%20...`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="bi bi-whatsapp" />
                </a>
            </div>
        </div>
    );
};

export default CallButton;
