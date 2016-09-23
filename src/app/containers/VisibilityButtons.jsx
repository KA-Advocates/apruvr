import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterVisibility } from '../actions';

import ButtonChoiceComponent from '../components/ButtonChoiceComponent';

import { VISIBILITIES, PICKS } from '../helpers/consts';

const VisibilityButtons = (props) =>
    <div className="col-md-5 col-sm-5 col-xs-12">
        <h2>States</h2>
        <ButtonChoiceComponent
            {...props}
            names={VISIBILITIES} />
    </div>;

export default connect(
    (state) => ({
        choices:    state.visibility,
        used:       PICKS[state.content.code],
    }),
    (dispatch) => bindActionCreators({
        onChoose:   filterVisibility,
    }, dispatch)
)(VisibilityButtons);
