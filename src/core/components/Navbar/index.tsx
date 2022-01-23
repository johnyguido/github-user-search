import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
   return (
      <div className="header-container">
      <Link to="/">
          <h1 className="header-title">Bootcamp DevSuperior</h1>
      </Link>
  </div>
   );
}

export default NavBar;