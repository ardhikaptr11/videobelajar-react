import PropTypes from 'prop-types';

const FooterContent = ({ children }) => {
    return (
        <div className="footerContent">
            {children}
        </div>
    )
};

FooterContent.propTypes = {
    children: PropTypes.node.isRequired
}

export default FooterContent;