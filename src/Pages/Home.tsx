import React from 'react';

import ParalaxItem from '../Components/ParalaxItem';
import ExternalLink from '../Components/ExternalLink';

import { GitHub as GitHubIcon } from 'react-feather';
import { Linkedin as LinkedinIcon } from 'react-feather';
import { Mail as EmailIcon } from 'react-feather';

interface HomeProps {
    routeTo: (path: string) => void;
    className?: string;
}

class Home extends React.Component<HomeProps> {
    render() {
        return (
            <div className={"d-flex flex-column justify-content-center full-width-fill " + this.props.className}>
                <div className="d-flex align-self-center z-2">
                    <ParalaxItem level={0} >
                        <h1 className='fullname-header'>Quentin Lautischer</h1>
                    </ParalaxItem>
                </div>
                <div className="d-flex align-self-center flex-row">
                    <ParalaxItem level={0} className="pr-5 pl-5 ">
                        <ExternalLink to='https://www.linkedin.com/in/quentinlautischer/' className="linkedin-link">
                            <LinkedinIcon size={64} strokeWidth={1} />
                        </ExternalLink>
                    </ParalaxItem>
                    <ParalaxItem level={0} className="pr-5 pl-5 pb-5">
                        <ExternalLink to='https://github.com/quentinlautischer' className="github-link">
                            <GitHubIcon size={64} strokeWidth={1} />
                        </ExternalLink>
                    </ParalaxItem>
                    <ParalaxItem level={0} className="pr-5 pl-5 pb-5">
                        <ExternalLink to='mailto:qlautischer@gmail.com' className="email-link">
                            <EmailIcon size={64} strokeWidth={1} />
                        </ExternalLink>
                    </ParalaxItem>
                </div>
                <div className="d-flex align-self-center z-2">
                    <ParalaxItem level={1} inversed={false} className="nogap-right-10">
                        <img height={140} width={80} src="assets/plant3.png" />
                    </ParalaxItem>
                    <ParalaxItem level={1} inversed={true} className="">
                        <img src="assets/avatar.png" />
                    </ParalaxItem>
                    <ParalaxItem level={2} inversed={true} className="align-self-end nogap-left-250">
                        <img height={40} width={40} src="assets/coffee.png" />
                    </ParalaxItem>
                    <ParalaxItem level={1} inversed={false} className="align-self-end nogap-left-150">
                        <img height={140} width={80} src="assets/plant4.png" />
                    </ParalaxItem>
                </div>
            </div>);
    }
}

export default Home;