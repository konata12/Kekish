import '../../../App.css';

// Props

function Title({ title, sub_title }) {
  return <div>
            <h1 className='title'>{ title }</h1>
            <p className='sub_title'>{ sub_title }</p>
    </div>
            
}

export default Title;