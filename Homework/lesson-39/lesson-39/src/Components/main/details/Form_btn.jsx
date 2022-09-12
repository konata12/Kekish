import '../../../App.css';

// Props

function Form_input({ name, type }) {
  return <button className='feedback_btn' type={ type }>{ name }</button>
}

export default Form_input;