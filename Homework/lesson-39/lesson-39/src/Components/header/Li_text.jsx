import '../../App.css';

// Props

function Li_text({ text, id }) {
  return <li className='nav_text' id={ id }>
        <a href='#'>
            { text }
        </a>
    </li>
}

export default Li_text;