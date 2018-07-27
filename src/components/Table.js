import React from 'react';
import TableRow from './TableRow';

const Table = (props) => (
    <table className="table table-striped">
        <thead>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Price USD</th>
                <th>Price BTC</th>
                <th>Market Cap</th>
                <th>% Change(1hr)</th>
                <th>Last Updated</th>
            </tr>
        </thead>
        <tbody>
            {props.list.map((coin) => (
                <TableRow key={coin.rank} data={coin} />
            ))}
        </tbody>
    </table>
);

export default Table;

