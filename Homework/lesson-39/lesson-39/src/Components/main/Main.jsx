import Sec_1 from "./Sec_1";
import Sec_2 from "./Sec_2";
import Sec_3 from "./Sec_3";
import Sec_4 from "./Sec_4";
import Sec_5 from "./Sec_5";

// Props
// Sec-2
import houses from '../../img/houses_bg.png'

// Sec_4
import service_img_1 from '../../img/analitics.png'
import service_img_2 from '../../img/love.png'
import service_img_3 from '../../img/cloud.png'

function Main() {
    return <main className="main">
        <Sec_1 link='#' link_text='read more' />
        <Sec_2 img={ houses } />
        <Sec_3 />
        <Sec_4 link='#' link_text='visit our blog' />
        <Sec_5 />
    </main>;
}

export default Main