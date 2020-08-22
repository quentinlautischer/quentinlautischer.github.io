import React from 'react';

import SquareButton from '../Components/SquareButton';
import ParalaxItem from '../Components/ParalaxItem';
import ExternalLink from '../Components/ExternalLink';
import Nav from '../Components/Nav';

import { GitHub as GitHubIcon } from 'react-feather';
import { Linkedin as LinkedinIcon } from 'react-feather';
import { Mail as EmailIcon } from 'react-feather';

class Home extends React.Component {
    render() {
        return (
        <div className="d-flex align-self-center align-self-center-offset">
            <div className="flex-column">
            <ParalaxItem level={0} inversed={true}>
                <h1 className='fullname-header'>Quentin Lautischer</h1>
            </ParalaxItem>

                <div className="d-flex flex-row">
                    <SquareButton className='grey-box'>
                        <ExternalLink to='https://www.linkedin.com/in/quentinlautischer/'>
                            <LinkedinIcon size={64} strokeWidth={1} />
                        </ExternalLink>
                    </SquareButton>
                    <SquareButton className='grey-box'>
                        <ExternalLink to='https://github.com/quentinlautischer'>
                            <GitHubIcon size={64} strokeWidth={1} />
                        </ExternalLink>
                    </SquareButton>
                    <SquareButton className='grey-box'>
                        <ExternalLink to='mailto:qlautischer@gmail.com'>
                            <EmailIcon size={64} strokeWidth={1} />
                        </ExternalLink>
                    </SquareButton>
                </div>
            </div>
            <Nav />
        </div>);
    }
}

export default Home;