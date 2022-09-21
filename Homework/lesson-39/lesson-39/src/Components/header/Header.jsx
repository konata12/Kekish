import '../../App.css';
import Nav from './Nav.jsx'

// Props
import logo from '../../img/logo.jpg'

function Header() {
  const name = 'aaa'
  return <header className="header">
    <div className="container">
      <Nav />
    </div>
  </header>;
}

export default Header;