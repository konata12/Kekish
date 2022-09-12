import '../../../App.css';

// Props

function contact({ img, contact }) {
  return <div className="contact">
        <img src={ img } alt="" />
        <p className='contact_info'>{ contact }</p>
    </div>;
}

export default contact;