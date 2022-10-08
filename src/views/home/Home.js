import { Link } from 'react-router-dom';
import TextCard from '../../components/textCard/TextCard';
import Button from './../../components/button/Button';
import clinicImg from './../../resources/imgs/home_img.jpeg';
import {
    aboutUsTitle,
    aboutUs,
    misionTitle,
    mision,
    visionTitle,
    vision,
} from './../../constants/homeTexts';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container" data-testid="home">
            <div className="row call-action-container">
                <div className="col-sm-6 ps-0 pe-0 text-center my-auto">
                    <div data-testid="call-action">
                        <h1>CENTERAVID</h1>
                        <h3>Nunca es tarde para comenzar de nuevo</h3>
                        <Link to="/contacto" data-testid="call-action-button">
                            <Button text="Contactanos" />
                        </Link>
                    </div>
                </div>
                <div className="col-sm-6 order-lg-last order-first mb-lg-0 mb-5 align-items-center justify-content-center d-flex p-0">
                    <img
                        src={clinicImg}
                        alt="MIKADIFO"
                        className="clinic-img"
                        data-testid="home-img"
                    />
                </div>
            </div>
            <div className="info-container" data-testid="info-container">
                <div className="about-container">
                    <TextCard title={aboutUsTitle} text={aboutUs} />
                </div>
                <div className="row g-0">
                    <div className="col mision-container">
                        <TextCard title={misionTitle} text={mision} />
                    </div>
                    <div className="col vision-container">
                        <TextCard title={visionTitle} text={vision} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
