import '../../App.css';
import Title from './details/Title.jsx'
import Date from './details/Date.jsx'

// Props

function Sec_2({ img }) {
  return <section className="sec_2">
        <div className="container">
            <div className="left">
                <Date date='2011' date_text='Lorem ipsum dolor sit amet, consectetur adipiselit. Vivamus varius nec diam vitae hendrerit bigus mit.' />
                <Date date='2012' date_text='Sed at auctor sem, nec tincidunt elit. Pellentesque enim turpis, porttitor ac orci in, ultrices efficitur nisl. Ut odio libero, sodales a tellus eleifend, suscipit dapibus mi.' />
            </div>

            <div className="line">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle big"></div>
                <div className="circle"></div>
            </div>

            <div className="right">
                <Date date='2013' date_text='Lorem ipsum dolor sit amet, consectetur adipiselit. Vivamus varius nec diam vitae hendrerit bigus mit. Begitus vit urna nulla.' />
                <Date date='2014' date_text='Lorem ipsum dolor sit amet, consectetur adipiselit. Vivamus varius nec diam vitae hendrerit bigus mit. Begitus vit urna nulla.' />
            </div>
        </div>
        <img id='houses' src={ img } alt="" />
    </section>;
}

export default Sec_2;