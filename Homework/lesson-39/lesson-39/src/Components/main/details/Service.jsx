import '../../../App.css';

// Props

function Service({ service_img, service_name, service_info }) {
  return <div className="service">
        <img src={ service_img } alt="" />
        <div className="service_name">{ service_name }</div>
        <div className="service_info">{ service_info }</div>
    </div>
            
}

export default Service;