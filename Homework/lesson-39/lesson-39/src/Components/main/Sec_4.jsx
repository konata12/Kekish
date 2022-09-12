import '../../App.css';
import Title from './details/Title.jsx'
import Service from './details/Service.jsx'

// Props
import service_img_1 from '../../img/analitics.png'
import service_img_2 from '../../img/love.png'
import service_img_3 from '../../img/cloud.png'

function Sec_4({ link, link_text }) {
    return <section className="sec_4">
        <div className="container">
            <Title title='We provide you everything' sub_title='Maybe not everything, but we provide you some stuff.s' />
            
            <div className="services">
                <Service service_img={ service_img_1 } service_name='Some Analytics' service_info='Aenean nisi lectus, convallis non lorem sit amet, rhoncus malesuada justo' />
                <Service service_img={ service_img_2 } service_name='We provide you love' service_info='Aenean nisi lectus, convallis non lorem sit amet, rhoncus malesuada justo' />
                <Service service_img={ service_img_3 } service_name='And Some Cloud' service_info='Aenean nisi lectus, convallis non lorem sit amet, rhoncus malesuada justo' />
            </div>
            
            <a className='link' href={ link }>{ link_text }</a>
        </div>
    </section>;
}

export default Sec_4;