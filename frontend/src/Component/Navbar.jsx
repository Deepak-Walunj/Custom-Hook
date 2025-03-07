import {Link} from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return(
        <div className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/yoga">Yoga</Link>
            <Link to="/food">Food</Link>
        </div>
    )
}

export default Navbar;