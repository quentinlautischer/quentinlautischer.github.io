/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { CardItem } from '../Api';

import { Card as BSCard, Badge } from 'react-bootstrap';
import { Info as InfoIcon } from 'react-feather';

import { ArrowUpRight as ArrowUpRightIcon } from 'react-feather';

interface CardProps {
    item: CardItem;
    routeTo: (path: string) => void;
}

class Card extends React.Component<CardProps> {
    constructor(props: CardProps) {
        super(props);
        
        this.state = {};
    }

    render() {
        return (
            <BSCard>
                { this.props.item.imgSrc &&
                    <BSCard.Img variant="top" src={this.props.item.imgSrc}></BSCard.Img>
                }
                <BSCard.Body>
                    <BSCard.Title>
                        {this.props.item.title}
                        { this.props.item.extendedInfo &&
                            <a className='extended-info-btn' onClick={() => this.props.routeTo('/projects/' + this.props.item.title)}>
                                <InfoIcon className='float-right' strokeWidth={1} />
                            </a>
                        }
                    </BSCard.Title>
                    {
                        this.props.item.categories.map(c => {
                            return(<Badge key={c} variant='secondary'>{c}</Badge>);
                        })
                    }
                    <BSCard.Text className='card-body-text'>
                        {this.props.item.description}
                    </BSCard.Text>
                </BSCard.Body>
                <BSCard.Footer hidden={!(this.props.item.vidSrc || this.props.item.appSrc || this.props.item.gitSrc)}>
                    { this.props.item.vidSrc &&
                        <Badge className='youtube' variant='secondary'><a href={this.props.item.vidSrc}>View YouTube <ArrowUpRightIcon size={14}/></a></Badge>
                    }
                    { this.props.item.appSrc &&
                        <Badge className='heroku' variant='secondary'><a href={this.props.item.appSrc}>Visit WebApp <ArrowUpRightIcon size={14}/></a></Badge>
                    }
                    { this.props.item.gitSrc &&
                        <Badge className='github' variant='secondary'><a href={this.props.item.gitSrc}>View Code <ArrowUpRightIcon size={14}/></a></Badge>
                    }
                </BSCard.Footer>
            </BSCard>);
    }
}

export default Card;