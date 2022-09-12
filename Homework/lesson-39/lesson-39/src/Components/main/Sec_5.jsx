import '../../App.css';
import Contact from './details/Contact.jsx'
import Title from './details/Title.jsx'
import Form from './details/Form.jsx'

// Props
import img_1 from '../../img/number.png'
import img_2 from '../../img/address.png'
import img_3 from '../../img/email.png'
import Copyright from './details/Copyright';

function Sec_5({  }) {
    return <section className="sec_5">
        <div className="container">
            <Title title='Contac Us' sub_title='We know what we need to do' />
            <div className='contacts'>
                <Contact img={ img_1 } contact='555-222-333'/>
                <Contact img={ img_2 } contact='Here is some address' />
                <Contact img={ img_3 } contact='Here is some address' />
            </div>
            <Form name='Full Name' email='Email'
                number='Number' main_text='Write your Message here...'
                main_text_size='8' btn='Submit' />
            <Copyright text='Copyright © Kenan Hamidic. All rights reserved.' />
        </div>
    </section>;
}

export default Sec_5;