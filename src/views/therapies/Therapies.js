import TherapyCard from '../../components/therapyCard/TherapyCard';
import TopCard from '../../components/topCard/TopCard';
import imgExample from './../../resources/imgs/home_img.jpeg'; //TODO: get real one
import './Therapies.css';

const Therapies = () => {
    return (
        <>
            <TopCard
                title={'Terapias'}
                subtitle={'Ofrecemos las mejores terapias de rehabilitación'}
            />
            <div className="therapies">
                <TherapyCard
                    img={imgExample}
                    title={'Example'}
                    text={
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
                    }
                />
            </div>
        </>
    );
};

export default Therapies;
