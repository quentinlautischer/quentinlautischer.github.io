import React from 'react';

import { CardItem } from '../Api';
import Card from '../Components/Card';

import { CardDeck, CardColumns } from 'react-bootstrap';

interface CardListProps<T> {
    items: T[]
    toCardItem: (arg0: T) => CardItem;
    columns: boolean;
    routeTo: (path: string) => void;
}

class CardList<T> extends React.Component<CardListProps<T>> {

    render() {
        if (this.props.columns) {
            return (<CardColumns>{ this.cards() }</CardColumns>);
        }
        return (<CardDeck>{ this.cards() }</CardDeck>);
    }

    cards = () => {
        return this.props.items.map(i => {
            let item = this.props.toCardItem(i);
            return (<Card key={item.title} item={item} routeTo={this.props.routeTo} />)
        })
    }
}

export default CardList;