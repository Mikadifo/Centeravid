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
        <div className="home-container">
            <div id="home" className="row">
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
                    <img
                        src={clinicImg}
                        alt="MIKADIFO"
                        className="clinic-img"
                    />
                </div>
            </div>
            <div className="info-container">
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
