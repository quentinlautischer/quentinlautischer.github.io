import React from 'react';

interface ScrollIndicatorProps {
    size: 'sm' | 'md' | 'lg';
    onMouseOver: () => void;
    onMouseLeave: () => void;
}

interface ScrollIndicatorState {
    mouseOver: boolean;
}

class ScrollIndicator extends React.Component<ScrollIndicatorProps, ScrollIndicatorState> {
    constructor(props: ScrollIndicatorProps) {
        super(props);

        this.state = {mouseOver: false};
    }

    onMouseOver = () => {
        this.setState({mouseOver: true});
        this.props.onMouseOver();
    }

    onMouseLeave = () => {
        this.setState({mouseOver: false});
        this.props.onMouseLeave();
    }

    render() {
        let classNameExtended = '';
        if (this.state.mouseOver)
            classNameExtended += ' hovering '
        if (this.props.size == 'lg')
            classNameExtended += ' hovering '

        return (<div 
                    onMouseOver={this.onMouseOver} 
                    onMouseLeave={this.onMouseLeave} 
                    style={{bottom: 0, position: 'fixed', height: '100px'}}>
            <span className={"scroll-indicator-text " + classNameExtended}>SCROLL</span>
            <span className={"scroll-tail " + classNameExtended}></span>
        </div>);
    }
}

export default ScrollIndicator;