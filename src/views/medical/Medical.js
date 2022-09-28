import MedicalCard from '../../components/medicalCard/MedicalCard';
import TopCard from '../../components/topCard/TopCard';
import './Medical.css';
import img from './../../resources/imgs/P_coc.jpeg'; //TODO: cahnge

const Medical = () => {
    return (
        <>
            <TopCard
                title={'Cuerpo Médico'}
                subtitle={'Poseemos los mejores especialistas'}
            />
            <div className="medical-body">
                <MedicalCard
                    img={img}
                    name={'Dra. Isabel Padilla'}
                    rol={'Medical Asistant'}
                />
            </div>
        </>
    );
};

export default Medical;
