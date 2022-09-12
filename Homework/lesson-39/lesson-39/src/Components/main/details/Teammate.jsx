import '../../../App.css';

// Props

function Teammate({ person, name, position, soc_link_1,
    soc_net_1, soc_link_2, soc_net_2 }) {
  return <div className="teammate">
        <img src={ person } alt="" />
        <h3 className="name">{ name }</h3>
        <p className="position">{ position }</p>
        <div className="comunicate">
            <a href={ soc_link_1 }>
                <img src={ soc_net_1 } alt="" />
            </a>

            <a href={ soc_link_2 }>
                <img src={ soc_net_2 } alt="" />
            </a>
        </div>
    </div>
            
}

export default Teammate;