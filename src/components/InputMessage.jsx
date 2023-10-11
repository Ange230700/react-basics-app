import PropTypes from 'prop-types';

function InputMessage({setMessage}) {
    function handleChange(e) {
        setMessage(e.target.value);
    }
    return <input name='message' onChange={handleChange} />
}

InputMessage.propTypes = {
    setMessage: PropTypes.func.isRequired
}

// ? When do we use the shape method for PropTypes?

export default InputMessage;