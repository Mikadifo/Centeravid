import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="row foot-info">
                <div className="col">
                    <div className="row">
                        <h3>CENTERAVID</h3>
                    </div>
                    <div className="row">
                        <h5>Estamos aqui para ayudarte.</h5>
                    </div>
                </div>
                <div className="col">
                    <div className="row foot-icons">
                        <i class="col text-end bi bi-facebook" />
                        <i className="col text-start bi bi-instagram" />
                    </div>
                    <div className="row">btn</div>
                </div>
            </div>
            <div className="foot-copy text-center">
                © 2022 Centeravid. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
