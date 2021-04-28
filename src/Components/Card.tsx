import React from 'react';
import { Link } from 'react-router-dom';

import { CardItem } from '../Api';

import { Card as BSCard, Badge } from 'react-bootstrap';
import { Info as InfoIcon } from 'react-feather';

interface CardProps {
    item: CardItem
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
                            <Link to={'/projects/' + this.props.item.title} >
                                <InfoIcon className='float-right' strokeWidth={1} />
                            </Link>
                        }
                    </BSCard.Title>
                    {
                        this.props.item.categories.map(c => {
                            return(<Badge key={c} variant='secondary'>{c}</Badge>);
                        })
                    }
                    <BSCard.Text>
                        {this.props.item.description}
                    </BSCard.Text>
                    { this.props.item.vidSrc &&
                        <Badge className='youtube' variant='secondary'><a href={this.props.item.vidSrc}>YouTube</a></Badge>
                    }
                    { this.props.item.appSrc &&
                        <Badge className='heroku' variant='secondary'><a href={this.props.item.appSrc}>Web App</a></Badge>
                    }
                </BSCard.Body>
            </BSCard>);
    }
}

export default Card;