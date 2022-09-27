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
                {therapies.map((therapy, i) => (
                    <div key={therapy.id}>
                        <TherapyCard
                            img={therapy.img}
                            title={therapy.title}
                            text={therapy.text}
                            imgLeft={i % 2 !== 0}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Therapies;
