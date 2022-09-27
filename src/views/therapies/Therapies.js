import TherapyCard from '../../components/therapyCard/TherapyCard';
import TopCard from '../../components/topCard/TopCard';
import therapies from './../../resources/info/therapies.js';
import './Therapies.css';

const Therapies = () => {
    return (
        <>
            <TopCard
                title={'Terapias'}
                subtitle={'Ofrecemos las mejores terapias de rehabilitación'}
            />
            <div className="therapies">
                {therapies.map((therapy) => (
                    <TherapyCard
                        key={therapy.id}
                        img={therapy.img}
                        title={therapy.title}
                        text={therapy.text}
                    />
                ))}
            </div>
        </>
    );
};

export default Therapies;
