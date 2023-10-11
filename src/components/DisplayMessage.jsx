import PropTypes from 'prop-types';

function DisplayMessage({ message }) {
    return <p>{message}</p>
}

DisplayMessage.propTypes = {
    message: PropTypes.string.isRequired
}

export default DisplayMessage;