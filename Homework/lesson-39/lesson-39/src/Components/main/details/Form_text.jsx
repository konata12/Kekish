import '../../../App.css';

// Props

function Form_text({ name, size }) {
  return <textarea className='feedback_text' placeholder={ name } rows={ size }></textarea>
}

export default Form_text;