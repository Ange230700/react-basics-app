import PropTypes from 'prop-types';

function SayHello({ wilder }) {
    return (
        <p>Hello, my name is {wilder.name}, and I know {wilder.languages[0]} among other things.</p>
    );
}

SayHello.propTypes = {
    wilder: PropTypes.shape({
        name: PropTypes.string.isRequired,
        languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
}

export default SayHello;