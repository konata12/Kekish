import '../../../App.css';

// Props

function Date({ date, date_text }) {
  return <div className="date">
        <div className="date_num">{ date }</div>
        <div className="date_info">{ date_text }</div>
    </div>
            
}

export default Date;