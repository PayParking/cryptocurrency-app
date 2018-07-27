const DateConversion = (props) => {
    let localTime = new Date(props.date * 1000);
    localTime = localTime.getFullYear() + "-" + (localTime.getMonth()+1) + "-" + localTime.getDate() + " " + localTime.getHours() + ":" +
                            localTime.getMinutes() + ":" + localTime.getSeconds(); 
    
    return localTime;
}

export default DateConversion;