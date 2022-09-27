import PlantCard from '../../components/plantCard/PlantCard';
import TopCard from '../../components/topCard/TopCard';
import img from './../../resources/imgs/T_espiritual.jpeg'; //TODO: change

const Plant = () => {
    return (
        <>
            <TopCard
                title={'Instalación'}
                subtitle={'Contamos con zonas multipropositos'}
            />
            <div className="p-5">
                <PlantCard img={img} title={'Gimansio'} />
            </div>
        </>
    );
};

export default Plant;
