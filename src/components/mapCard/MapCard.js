import './MapCard.css';

const MapCard = () => {
    return (
        <div className="map-card-container d-flex">
            <iframe
                title="centeravid-map"
                className="map-frame"
                src="https://maps.google.com/maps?q=centeravid&t=&z=17&ie=UTF8&iwloc=&output=embed"
            ></iframe>
            <div className="my-auto">
                <h4>Estamos ubicados en:</h4>
                <a
                    href="https://www.google.com/maps?ll=-2.922375,-79.038992&z=17&t=m&hl=en-US&gl=US&mapclient=embed&cid=13281604193666422235"
                    target="_blank"
                    rel="noreferrer"
                >
                    <h5 className="m-0">010108 Cuenca, Ecuador</h5>
                </a>
            </div>
        </div>
    );
};

export default MapCard;
