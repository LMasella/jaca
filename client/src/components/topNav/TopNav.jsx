import jaca_logo from '../../img/jaca_logo1.png';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';

const TopNav = props => {
    return (
        <header className="container d-flex flex-wrap justify-content-center py-3 mb-2 border-bottom">
            <Link to={"/"} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <img className="me-2" src={jaca_logo} alt="Just a Click Away" style={{height: '5em'}} />
                <span className="fs-4">Just a Click Away!</span>
            </Link>
            <ul className="nav nav-pills align-items-center">
                <NavItem pathname="/" text="Home" />
                <NavItem pathname="/about" text="About Us" />
                <NavItem pathname="/contact" text="Contact Us" />
            </ul>
        </header>
    );
}

export default TopNav;