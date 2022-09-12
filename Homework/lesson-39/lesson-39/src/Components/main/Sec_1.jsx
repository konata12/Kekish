import '../../App.css';
import Title from './details/Title.jsx'

// Props

function Sec_1({ link, link_text }) {
    return <section className="sec_1">
        <div className="container">
            <Title title='We build it with passion' sub_title='Just to be clear, we do this for fun not for you, just kidding.' />
            <a className='link' href={ link }>{ link_text }</a>
            <div className='head_bot'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </section>;
}

export default Sec_1;