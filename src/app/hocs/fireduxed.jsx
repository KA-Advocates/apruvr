import React, { PropTypes, Component } from 'react';

export default function fireduxed(calcPath) {
    return (WrappedComponent) => {
        return class FireduxedHOC extends Component {
            static contextTypes = {
                firebase: PropTypes.object,
            }

            static propTypes = {
                onFire: PropTypes.func.isRequired,
            }

            componentDidMount() {
                const path = calcPath(this.props);
                this.ref = this.context.firebase.database().ref(path);
                this.ref.on('value', (snapshot) => this.props.onFire(snapshot));
            }

            componentWillUnmount() {
                this.ref.off();
            }

            render() {
                return <WrappedComponent {...this.props} />;
            }
        };
    };
}
