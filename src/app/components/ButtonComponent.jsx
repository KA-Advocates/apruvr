import React from 'react';

const ButtonComponent = ({ name, isActive, onClick }) =>
    <div
        className={'btn ' + (isActive ? 'btn-primary' : 'btn-default')}
        onClick={onClick}>
            {name}
    </div>;

ButtonComponent.propTypes = {
    name:       React.PropTypes.string.isRequired,
    isActive:   React.PropTypes.bool,
    onClick:    React.PropTypes.func.isRequired,
};

ButtonComponent.defaultProps = {
    isActive:   false,
};

export default ButtonComponent;
