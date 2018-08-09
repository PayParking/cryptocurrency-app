import React from 'react';
import DateConversion from './DateConversion';
import PriceConversion from './PriceConversion';
import PercentColor from './PercentColor';

const TableRow = ({data}) => {
    return (
        <tr>
            <td>{data.rank}</td>
            <td>{data.name}</td>
            <td>{data.symbol}</td>
            <td align="right"><PriceConversion price={data.price_usd} /></td>
            <td align="right">{data.price_btc}</td>
            <td align="right"><PriceConversion price={data.market_cap_usd} /></td>
            <td align="right"><PercentColor percent={data.percent_change_1h}/></td>
            <td><DateConversion date={data.last_updated} /></td>
        </tr>
    )
    
}

export default TableRow;