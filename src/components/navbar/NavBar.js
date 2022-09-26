import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to="/">go H</Link>
            <Link to="/terapias">go T</Link>
            <Link to="/instalacion">go I</Link>
            <Link to="/cuerpo_medico">go M</Link>
            <Link to="/contacto">go C</Link>
        </nav>
    );
};

export default NavBar;
