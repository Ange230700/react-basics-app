import PropTypes from 'prop-types';

function Article({ name, emoji, removeArticle }) {
    return (
        <li>
            {emoji} {name}
            <input type="text" defaultValue={name} />
            <button onClick={
                () => {
                    removeArticle({ name, emoji });
                }
            }>remove</button>
        </li>
    );
}

Article.propTypes = {
    name: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
    removeArticle: PropTypes.func.isRequired
}

export default Article;