import '../../App.css';
import Title from './details/Title.jsx'
import Teammate from './details/Teammate.jsx'

// Props
import person_1 from '../../img/person-1.jpg'
import person_2 from '../../img/person-2.jpg'
import person_3 from '../../img/person-3.jpg'
import soc_net_1 from '../../img/twitter.png'
import soc_net_2 from '../../img/instagram.png'

function Sec_3({  }) {
    return <section className="sec_3">
        <div className="container">
            <Title title='This is our team' sub_title='We are small but effective and ...' />
            <div className="teammates">
                <Teammate person={ person_1 } name='Mark Once' position='Designer & Front-End Developer' 
                        soc_link_1='https://twitter.com/?lang=uk' soc_net_1={ soc_net_1 }
                        soc_link_2='https://www.instagram.com' soc_net_2={ soc_net_2 } />

                <Teammate person={ person_2 } name='Justin Twice' position='Founder & CEO' 
                        soc_link_1='https://twitter.com/?lang=uk' soc_net_1={ soc_net_1 }
                        soc_link_2='https://www.instagram.com' soc_net_2={ soc_net_2 } />

                <Teammate person={ person_3 } name='Antonio Never' position='Someone & Somewhere' 
                        soc_link_1='https://twitter.com/?lang=uk' soc_net_1={ soc_net_1 }
                        soc_link_2='https://www.instagram.com' soc_net_2={ soc_net_2 } />
            </div>
        </div>
    </section>;
}

export default Sec_3;