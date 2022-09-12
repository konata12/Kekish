import '../../../App.css';
import Form_input from './Form_input.jsx'
import Form_text from './Form_text.jsx'
import Form_btn from './Form_btn.jsx'

// Props

function Form({  }) {
  return <div className='feedback'>
        <form className='feedback_form'>
            <Form_input name='Full Name' />
            <Form_input name='Email' />
            <Form_input name='Number' />
            <Form_text name='Write your Message here...' size='8' />
            <Form_btn name='Submit' type='submit' />
        </form>
    </div>
}

export default Form;