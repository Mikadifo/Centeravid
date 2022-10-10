import { useState } from 'react';
import '././CallButton.css';

const CallButton = ({ text, isEmail, testid }) => {
    const [cardValue, setCardValue] = useState(text);

    const copyText = async () => {
        setCardValue('Copiado!');
        await navigator.clipboard.writeText(text);
        setTimeout(() => setCardValue(text), 1000);
    };

    return (
        <div className="call-button-container d-md-flex" data-testid={testid}>
            <h4 className="my-auto">{cardValue}</h4>
            <div className="my-auto">
                <span onClick={copyText} data-testid="copy-button">
                    <i className="bi bi-back" />
                </span>
                <a
                    href={`${isEmail ? 'mailto:' : 'tel:'}${text}`}
                    data-testid={isEmail ? 'email-button' : 'call-button'}
                >
                    {isEmail ? (
                        <i className="bi bi-envelope" />
                    ) : (
                        <i className="bi bi-telephone" />
                    )}
                </a>
                {isEmail ?? (
                    <a
                        href={`https://wa.me/593${text.substring(
                            1,
                            text.length,
                        )}?text=Hola%20Centeravid,%20me%20gustaria%20saber%20...`}
                        target="_blank"
                        rel="noreferrer"
                        data-testid="whatsapp-button"
                    >
                        <i className="bi bi-whatsapp" />
                    </a>
                )}
            </div>
        </div>
    );
};

export default CallButton;
