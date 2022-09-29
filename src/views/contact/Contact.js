import TopCard from '../../components/topCard/TopCard';
import MapCard from '../../components/mapCard/MapCard';
import CallCard from '../../components/callCard/CallCard';
import EmailCard from '../../components/emailCard/EmailCard';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <TopCard
                title={'Contactanos'}
                subtitle={'Puedes contactarnos de varias formas'}
            />
            <div className="contact-container">
                <div className="map-container">
                    <MapCard />
                </div>
                <div className="call-container">
                    <CallCard />
                </div>
                <div className="form-container">
                    <EmailCard />
                </div>
            </div>
        </>
    );
};

export default Contact;
