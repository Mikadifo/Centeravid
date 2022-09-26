import { useLocation } from 'react-router-dom';
import Button from './../button/Button';
import './Footer.css';

const Footer = () => {
    const { pathname } = useLocation();

    return (
        <footer>
            <div className="row foot-info">
                <div className="col my-auto">
                    <div className="row">
                        <h3>CENTERAVID</h3>
                    </div>
                    <div className="row">
                        <h5>Estamos aqui para ayudarte.</h5>
                    </div>
                </div>
                <div className="col justify-content-end d-flex p-0">
                    <div className="my-auto">
                        <div className="foot-icons">
                            <div className="text-center">
                                <a
                                    href="https://www.facebook.com/dipidiana/?ref=page_internal"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="bi bi-facebook" />
                                </a>
                                <a
                                    href="https://www.instagram.com/centeravid/?hl=en"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="bi bi-instagram" />
                                </a>
                            </div>
                        </div>
                        {pathname !== '/contacto' && (
                            <div className="foot-button">
                                <Button text="Contactanos" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="foot-copy text-center">
                © 2022 Centeravid. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
