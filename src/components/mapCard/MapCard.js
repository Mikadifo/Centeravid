import './MapCard.css';

const MapCard = () => {
    return (
        <div className="map-card-container d-flex" data-testid="map-card">
            <iframe
                title="centeravid-map"
                className="map-frame"
                src="https://maps.google.com/maps?q=centeravid&t=&z=17&ie=UTF8&iwloc=&output=embed"
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
