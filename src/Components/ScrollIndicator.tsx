import React from 'react';

interface ScrollIndicatorProps {
    size: 'sm' | 'md' | 'lg';
    onMouseOver: () => void;
    onMouseLeave: () => void;
    onClick: () => void;
    inverse?: boolean;
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

        let style : React.CSSProperties = {
            position: 'fixed', 
            height: '25%',
            bottom: 0,
            top: 'auto',   
        };

        let direction = 'flex-column';

        if (this.props.inverse)
        {
            direction = 'flex-column-reverse';
            style['bottom'] = 'auto';
            style['top'] = 0;
            classNameExtended += '-reverse';
        }

        if (this.state.mouseOver)
            classNameExtended += ' hovering '
        if (this.props.size == 'lg')
            classNameExtended += ' hovering '

        return (<div 
                    className={"d-flex " + direction + " align-items-end full-width-fill"}
                    onClick={this.props.onClick}
                    onMouseOver={this.onMouseOver} 
                    onMouseLeave={this.onMouseLeave} 
                    style={style}>
            <div className="mt-auto hl-green" ></div> {/*Filler*/}
            <div className={"mr-auto ml-auto scroll-indicator-text" + classNameExtended}>SCROLL</div>
            <div className={"mr-auto ml-auto mt-1 mb-2 scroll-tail" + classNameExtended}></div>
        </div>);
    }
}

export default ScrollIndicator;