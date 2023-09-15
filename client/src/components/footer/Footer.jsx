import { Link } from "react-router-dom";
import facebook from "../../img/facebook.svg";
import instagram from "../../img/instagram.svg";
// import snapchat from "../img/snapchat.svg";
import indiegogo from "../../img/indiegogo.png";

const Footer = props => {
    return (
        <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <span className="mb-3 mb-md-0 text-muted">&copy; 2023 <Link className="text-muted text-decoration-none" to={'/'}>Jaca, Inc.</Link></span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a href="https://www.facebook.com/JACAapp" target="_blank" rel="noreferrer"><img src={facebook} alt="Facebook" /></a></li>
                <li className="ms-3"><a href="https://www.instagram.com/j.a.c.a_inc" target="_blank" rel="noreferrer"><img src={instagram} alt="Instagram" /></a></li>
                {/* <li className="ms-3"><a href="https://www.snapchat.com" target="_blank" rel="noreferrer"><img src={snapchat} alt="Snapchat" /></a></li> */}
                <li className="ms-3"><a href="https://www.indiegogo.com/projects/jaca-incorporated" target="_blank" rel="noreferrer"><img src={indiegogo} alt="Indiegogo" style={{height:"2em", width:"2em"}}/></a></li>
            </ul>
        </footer>
    );
}

export default Footer;