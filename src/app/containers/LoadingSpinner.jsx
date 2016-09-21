import React from 'react';
import { connect } from 'react-redux';

import Spinner from 'react-spinkit';

const LoadingSpinner = ({ loading }) => {
    if (!loading) {
        return null;
    }
    return (
        <div className="col-md-12">
            <h2>Loading</h2>
            <Spinner spinnerName="three-bounce" />
        </div>
    );
};

LoadingSpinner.propTypes = {
    loading:    React.PropTypes.bool.isRequired,
};

export default connect(
    (state) => ({
        loading: state.loading,
    })
)(LoadingSpinner);
