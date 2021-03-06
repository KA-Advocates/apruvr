import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const StatusAgent = ({ slug, workflow }) => {
    if (!workflow || !workflow[slug]) {
        return null;
    }
    return (
        <div className="badge">
            <span className="glyphicon glyphicon-user" />
            {' '}
            {workflow[slug].agent.name}
        </div>
    );
};

StatusAgent.propTypes = {
    slug:       PropTypes.string.isRequired,
    workflow:   PropTypes.object,
};

export default connect(
    (state, ownProps) => ({
        slug:       ownProps.slug,
        workflow:   state.workflow,
    })
)(StatusAgent);
