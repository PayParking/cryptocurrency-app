const PriceConversion = (props) => {
    return '$' + parseInt(props.price).toLocaleString();
}

export default PriceConversion;