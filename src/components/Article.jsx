import PropTypes from 'prop-types';

function Article({ name, emoji }) {
    return (
        <li>{emoji} {name}</li>
    );
}

Article.propTypes = {
    name: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired
}

export default Article;