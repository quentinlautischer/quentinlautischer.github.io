import React from 'react';

import { InputGroup, FormControl } from 'react-bootstrap';

interface SearchProps {
    className: string;
    onChange: (arg0: string | null) => void;
}

class Search extends React.Component<SearchProps> {

    render() {
        return (<InputGroup size="sm" className={`mb-3 ${this.props.className}`}>
            <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl 
                aria-label="Small" 
                aria-describedby="search" 
                onChange={ (e: any) => this.props.onChange(e.target.value) } 
            />
        </InputGroup>);
    }
}

export default Search;