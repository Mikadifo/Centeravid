import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './views/layout/Layout';
import Home from './views/home/Home';
import Therapies from './views/therapies/Therapies';
import Plant from './views/plant/Plant';
import Medical from './views/medical/Medical';
import Contact from './views/contact/Contact';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="terapias" element={<Therapies />} />
                    <Route path="instalacion" element={<Plant />} />
                    <Route path="cuerpo_medico" element={<Medical />} />
                    <Route path="contacto" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
