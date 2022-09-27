import PlantCard from '../../components/plantCard/PlantCard';
import TopCard from '../../components/topCard/TopCard';
import plants from '../../resources/info/plants';
import './Plant.css';

const Plant = () => {
    return (
        <>
            <TopCard
                title={'Instalación'}
                subtitle={'Contamos con zonas multipropositos'}
            />
            <div className="plants row">
                {plants.map((plant) => (
                    <div
                        className="col p-0 justify-content-center d-flex"
                        key={plant.id}
                    >
                        <div>
                            <PlantCard img={plant.img} title={plant.title} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Plant;
