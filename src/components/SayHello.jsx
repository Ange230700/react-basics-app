import PropTypes from 'prop-types';

function SayHello({name, age}) {
    return <p>Hello, my name is {name}, and I&apos;m {age}.</p>;
}

SayHello.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

export default SayHello;