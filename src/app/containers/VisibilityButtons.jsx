import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterVisibility } from '../actions';

import ButtonChoiceComponent from '../components/ButtonChoiceComponent';

import { VISIBILITIES, PICKS } from '../helpers/consts';

const VisibilityButtons = (props) =>
    <div className="col-md-4">
        <h2>States</h2>
        <ButtonChoiceComponent
            {...props}
            names={VISIBILITIES} />
    </div>;

function mapStateToProps(state) {
    return {
        choices:    state.visibility,
        used:       PICKS[state.content.code],
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        onChoose: filterVisibility,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityButtons);
