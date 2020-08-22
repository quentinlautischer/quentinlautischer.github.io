import React from 'react';

import  ParalaxSingleton from '../Other/ParalaxSingleton';

import { Provider, Subscribe } from 'unstated';

class ParalaxContainer extends React.Component {
    constructor(props: any) {
        super(props);
        
        this.state = {paralaxOffset: '0, 0, 0'};
    }

    render() {
        return (
            <Provider>
                <Subscribe to={[ParalaxSingleton]}>
                    { (paralax: ParalaxSingleton) => (
                        <div className='paralax-container' onMouseMove={(e) => 
                        {
                            this.calculateParalaxOffset(e, paralax);
                        }} >
                            {this.props.children}
                        </div>
                    )}
                </Subscribe>
            </Provider>
        );
    }

    calculateParalaxOffset = (e: React.MouseEvent, paralaxSingleton: ParalaxSingleton) => {

        let x = window.innerWidth/2;
        let y = window.innerHeight/2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        paralaxSingleton.setOffsetLevel(0, {x: (mouseX - x) * 0.01, y: (mouseY - y) * 0.01});
        paralaxSingleton.setOffsetLevel(1, {x: (mouseX - x) * 0.02, y: (mouseY - y) * 0.02});
        paralaxSingleton.setOffsetLevel(2, {x: (mouseX - x) * 0.06, y: (mouseY - y) * 0.03});
    }
}

export default ParalaxContainer;