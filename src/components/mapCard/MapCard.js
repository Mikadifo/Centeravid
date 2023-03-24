import './MapCard.css';

const MapCard = () => {
    return (
        <div
            className="map-card-container d-md-flex text-center text-md-start"
            data-testid="map-card"
        >
            <iframe
                title="centeravid-map"
                className="map-frame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.629569892939!2d-79.04249688524321!3d-2.922399197871469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd228a942ced3b%3A0xb851bca52ad355db!2sCenteravid%20Centro%20Terap%C3%A9utico%20De%20Adicciones%20Amor%20Y%20Vida!5e0!3m2!1sen!2sus!4v1679696840144!5m2!1sen!2sus"
            ></iframe>
            <div className="my-auto">
                <h4>Estamos ubicados en:</h4>
                <h5 className="m-0">
                    <a
                        href="https://www.google.com/maps?ll=-2.922375,-79.038992&z=17&t=m&hl=en-US&gl=US&mapclient=embed&cid=13281604193666422235"
                        target="_blank"
                        rel="noreferrer"
                        data-testid="location"
                    >
                        Dos de Agosto y P. Vicente Maldonado, Cuenca, Ecuador
                    </a>
                </h5>
            </div>
        </div>
    );
};

export default MapCard;
