import PropTypes from 'prop-types';

const FooterContent = ({ children }) => {
    return (
        <div className="flex flex-col gap-y-4">
            {children}
        </div>
    )
};

FooterContent.propTypes = {
    children: PropTypes.node.isRequired
}

export default FooterContent;