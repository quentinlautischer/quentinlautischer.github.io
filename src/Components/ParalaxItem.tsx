import React from 'react';

import ParalaxSingleton from '../Other/ParalaxSingleton';

import { Subscribe } from 'unstated';

interface ParalaxItemProps {
    level: number;
    inversed?: boolean;
}

class ParalaxItem extends React.Component<ParalaxItemProps> {

    render() {
        return (
            <Subscribe to={[ParalaxSingleton]}>
            { (paralax: ParalaxSingleton) => {
            
            var rightOffset = paralax.state.paralaxOffset[this.props.level].x;
            var bottomOffset = paralax.state.paralaxOffset[this.props.level].y; 
            if (this.props.inversed)
            {
                rightOffset = rightOffset * -1;
                bottomOffset = bottomOffset * -1;
            }

            return (
                <div className='paralax-item' style={{right: `${rightOffset}px`, bottom: `${bottomOffset}px`}}>
                    {this.props.children}
                </div>
            )}
            }
            </Subscribe>
        );
    }
}

export default ParalaxItem;