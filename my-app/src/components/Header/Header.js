import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    return (
      <div className='header_container'>
        <nav className='header_buttons_container'>
            <Link to="/">Home</Link>
            <Link to="logIn">Log in</Link>
            <Link to="signUp">Sign up</Link>
        </nav>
      </div>
    );
  };
  
  
export default Header
  