import React from 'react';

import ParalaxItem from './ParalaxItem';

interface SquareButtonProps {
    className: string;
}

class SquareButton extends React.Component<SquareButtonProps> {
    container = null;
    
    assignRef = (element: any) => {
        this.container = element;
    }

    render() {
        return (
            <ParalaxItem level={2}>
                <div className={'square-btn ' + this.props.className}>
                    {this.props.children}
                </div>
            </ParalaxItem>
        );
    }
}

export default SquareButton;