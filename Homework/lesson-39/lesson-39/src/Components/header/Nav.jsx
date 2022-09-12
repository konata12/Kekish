import '../../App.css';
import Li_text from './Li_text'
import Li_img from './Li_img'

// Props
import logo from '../../img/logo.jpg'

function Nav({  }) {
    return <ul className="nav">
        <Li_text text='Home' id='home' />
        <Li_text text='About Us' id='about_us' />
        <Li_text text='Team' id='team' />
        <Li_img img={ logo } link='#' id='logo' />
        <Li_text text='Services' id='services' />
        <Li_text text='Blog' id='blog' />
        <Li_text text='Contact Us' id='contact_us' />
    </ul>

}

export default Nav;