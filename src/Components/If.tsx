import React from 'react';

interface IfProps {
    condition: boolean;
}

class If extends React.Component<IfProps> {
    constructor(props: IfProps) {
        super(props);
    }

    render() {
        return (<React.Fragment>
            { this.props.condition &&
                <React.Fragment>
                    {this.props.children}
                </React.Fragment>
            }
        </React.Fragment>);
    }
}

export default If;