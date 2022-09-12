import '../../App.css';

function Li_img({ img, link, id }) {
  return <li className='nav_img' id={ id }>
        <a href={ link }>
            <img src={ img } alt="" />
        </a>
    </li>
}

export default Li_img;