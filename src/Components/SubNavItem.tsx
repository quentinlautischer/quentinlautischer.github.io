import React from 'react';

interface SubNavItemProps {
    className: string;
}

class SubNavItem extends React.Component<SubNavItemProps> {

    render() {
        return (
            <div className={'sub-nav-item ' + this.props.className } >
                { this.props.children }
            </div>
        );
    }
}

export default SubNavItem;