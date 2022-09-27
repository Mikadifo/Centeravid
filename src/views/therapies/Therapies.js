import TherapyCard from '../../components/therapyCard/TherapyCard';
import TopCard from '../../components/topCard/TopCard';

const Therapies = () => {
    return (
        <>
            <TopCard
                title={'Terapias'}
                subtitle={'Ofrecemos las mejores terapias de rehabilitación'}
            />
            <TherapyCard />
        </>
    );
};

export default Therapies;
