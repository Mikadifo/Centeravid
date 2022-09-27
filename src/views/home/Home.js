import { Link } from 'react-router-dom';
import Button from './../../components/button/Button';
import clinicImg from './../../resources/imgs/home_img.jpeg';
import './Home.css';

const Home = () => {
    return (
        <div id="home" className="row home-container">
            <div className="col-sm-6 ps-0 pe-0 text-center">
                <div>
                    <h1>CENTERAVID</h1>
                    <h3>Nunca es tarde para comenzar de nuevo</h3>
                    <Link to="/contacto">
                        <Button text="Contactanos" />
                    </Link>
                </div>
            </div>
            <div className="col-sm-6 order-lg-last order-first mb-lg-0 mb-5 align-items-center justify-content-center d-flex">
                <img src={clinicImg} alt="MIKADIFO" className="clinic-img" />
            </div>
        </div>
    );
};

export default Home;
