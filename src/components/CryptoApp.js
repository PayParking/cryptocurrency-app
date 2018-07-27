import React from 'react';
import Axios from 'axios';

import Header from './Header';
import Table from './Table';
import SearchBar from './SearchBar';

export default class CryptoApp extends React.Component {

    state = {
        coins:[],
        searchText: ''
    }

    componentDidMount() {
        Axios.get("https://api.coinmarketcap.com/v1/ticker/")
            .then((response) => {
                this.setState(() => ({
                    coins: response.data        
                })); 
            });
    };

    handleChange = (e) => {
        this.setState({ searchText:e.target.value });
    }

    render() {
        let searchText = this.state.searchText.trim().toLowerCase();
        let coins = this.state.coins;
        if (searchText.length > 0) {
            coins = coins.filter((i) => {
                return i.name.toLowerCase().match(searchText);
            });
        }
        return (
            <div>
                <Header />
                <SearchBar handleChange={this.handleChange} searchText={this.state.searchText}/>
                <Table list={coins} />
            </div>
        );
    }
}