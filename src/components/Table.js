import React from 'react';
import TableRow from './TableRow';

const Table = (props) => (
    <table className="table table-striped">
        <thead>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Symbol</th>
                <th className="text-right">Price USD</th>
                <th className="text-right">Price BTC</th>
                <th className="text-right">Market Cap</th>
                <th className="text-right">% Change(1hr)</th>
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

