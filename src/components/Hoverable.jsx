import React, {Component} from 'react';

const Hoverable = (WrappedComponent, wrapperClass = '', hoveredStyle = {backgroundColor: '#E2F4EA'}, unhoveredStyle = {}) => {
    class HoverableComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                hovered: false,
            }
        }

        onMouseEnter = () => {
            this.setState({hovered: true});
        };

        onMouseLeave = () => {
            this.setState({hovered: false});
        };

        render() {
            return (
                <div className={wrapperClass} style={this.state.hovered ? hoveredStyle : unhoveredStyle}
                     onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                    <WrappedComponent {...this.props} hovered={this.state.hovered}/>
                </div>
            )
        }

    }

    return HoverableComponent;
};

export default Hoverable;