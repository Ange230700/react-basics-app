import {useState} from 'react';

function InputMessage() {
    const [message, setMessage] = useState('');
    function handleChange(e) {
        setMessage(e.target.value);
    }
    return <input name='message' onChange={handleChange} />
}

export default InputMessage;