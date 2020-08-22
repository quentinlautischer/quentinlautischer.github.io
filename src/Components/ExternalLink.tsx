import React from 'react';

interface ExternalLinkProps {
    to: string;
    children: any;
}

function ExternalLink(props: ExternalLinkProps) {
    return (<a target='_blank' href={props.to} rel="noopener noreferrer">{props.children}</a>)
}

export default ExternalLink;