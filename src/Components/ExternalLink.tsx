import React from 'react';

interface ExternalLinkProps {
    to: string;
    className?: string;
    children: any;

}

function ExternalLink(props: ExternalLinkProps) {
    return (<a className={props.className} target='_blank' href={props.to} rel="noopener noreferrer">{props.children}</a>)
}

export default ExternalLink;