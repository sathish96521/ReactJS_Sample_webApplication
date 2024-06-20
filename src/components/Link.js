import PropTypes from 'prop-types';

function LinkData(props) {
    const { title, content, href } = props;
    // console.log('props', props);
    return (
        <div>
            <a href={href}>{title}</a>
            <p>{content}</p>
        </div>
    )
}

LinkData.prototype = {
    title: PropTypes.string,
    content: PropTypes.string
}

export default LinkData;