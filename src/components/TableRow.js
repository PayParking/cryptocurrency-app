import React from 'react';
import DateConversion from './DateConversion';
import PriceConversion from './PriceConversion';

const TableRow = ({data}) => {
    return (
        <tr>
            <td>{data.rank}</td>
            <td>{data.name}</td>
            <td>{data.symbol}</td>
            <td><PriceConversion price={data.price_usd} /></td>
            <td>{data.price_btc}</td>
            <td><PriceConversion price={data.market_cap_usd} /></td>
            <td>{data.percent_change_1h}</td>
            <td><DateConversion date={data.last_updated} /></td>
        </tr>
    )
}

export default TableRow;