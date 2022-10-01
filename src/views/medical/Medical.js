import MedicalCard from '../../components/medicalCard/MedicalCard';
import TopCard from '../../components/topCard/TopCard';
import medicalBody from './../../resources/info/medicalBody';
import './Medical.css';

const Medical = () => {
    return (
        <div data-testid="medical">
            <TopCard
                title={'Cuerpo Médico'}
                subtitle={'Poseemos los mejores especialistas'}
            />
            <div className="medical-body row">
                {medicalBody.map((body) => (
                    <div
                        className="col p-0 justify-content-center d-flex"
                        key={body.id}
                    >
                        <div>
                            <MedicalCard body={body} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Medical;
