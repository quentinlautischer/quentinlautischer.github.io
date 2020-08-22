import React from 'react';

import { AlertTriangle as AlertTriangleIcon } from 'react-feather';

class UnderContruction extends React.Component {

    render() {
        return (<div className='w-100 d-flex flex-row justify-content-center align-items-center'>
            <AlertTriangleIcon size={64} strokeWidth={1} />
                <h1 className='ml-5 mr-5'>Under Contruction</h1>
            <AlertTriangleIcon className='d-lg' size={64} strokeWidth={1} />
        </div>);
    }
}

export default UnderContruction;