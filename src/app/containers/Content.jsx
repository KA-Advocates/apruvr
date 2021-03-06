import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Content = ({ visible, children }) =>
    visible &&
        <div>
            {children}
        </div>;

Content.propTypes = {
    visible:    PropTypes.bool.isRequired,
    children:   PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default connect(
    (state) => ({
        visible: state.nodes !== null,
    })
)(Content);
