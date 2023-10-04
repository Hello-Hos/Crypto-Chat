import { useState,useEffect } from "react";
const CryptoNews = ({IsNews,setIsNews}) => {
const [Data, setData] = useState([{"name": "","iconUrl": "","rank": "","btcPrice": ""},{"name": "","iconUrl": "","rank": "","btcPrice": ""},{"name": "","iconUrl": "","rank": "","btcPrice": ""},{"name": "","iconUrl": "","rank": "","btcPrice": ""},{"name": "","iconUrl": "","rank": "","btcPrice": ""},{"name": "","iconUrl": "","rank": "","btcPrice": ""},{"name": "","iconUrl": "","rank": "","btcPrice": ""},{"name": "","iconUrl": "","rank": "","btcPrice": ""},{"name": "","iconUrl": "","rank": "","btcPrice": ""},{"name": "","iconUrl": "","rank": "","btcPrice": ""},{"name": "","iconUrl": "","rank": "","btcPrice": ""},{"name": "","iconUrl": "","rank": "","btcPrice": ""},{"name": "","iconUrl": "","rank": "","btcPrice": ""},{"name": "","iconUrl": "","rank": "","btcPrice": ""},{"name": "","iconUrl": "","rank": "","btcPrice": ""},{"name": "","iconUrl": "","rank": "","btcPrice": ""},{"name": "","iconUrl": "","rank": "","btcPrice": ""},{"name": "","iconUrl": "","rank": "","btcPrice": ""}, ]);
    const Getdata = async () => {
        const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1df59b1c12msh4c8ff578fcfb992p1640c4jsn347e6b4013c1',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const formatdata = await response.json();   
            setData(formatdata.data.coins);
            console.log("Inside datahub",formatdata.data.coins)
        } catch (error) {
            console.error(error);}
    }
    useEffect(() => {
     Getdata();
     console.log("data is here ", Data)
    }, [IsNews])
    
return (
<div className="Popup">
    <div className="flex"><h1>Crypto Ranking</h1> <h1 style={{"cursor": "pointer"}} onClick={() => {setIsNews(!IsNews); console.log(IsNews)}}>X</h1></div>
    
    <div className="rankingBox">
      
            <div className="rank">
            <img src={Data[0].iconUrl} className="cryptoImg" />
                <h1>{Data[0].name}</h1>
            <h2>Rank: {Data[0].rank}</h2>
            <h2 style={{"color": "green","weight": "500"}}>Btc Price: {Data[0].btcPrice}</h2>
       <h2 style={{"color": "blue"}}>Change : {Data[0].change}</h2>
        </div>
    
        <div className="rank">
        <img src={Data[1].iconUrl} className="cryptoImg" />
                <h1>{Data[1].name}</h1>
            <h2>Rank: {Data[1].rank}</h2>
            <h2 style={{"color": "green"}}>Btc Price: {Data[1].btcPrice}</h2>
            <h2 style={{"color": "blue"}}>Change : {Data[1].change}</h2>
        </div>
        <div className="rank">
        <img src={Data[2].iconUrl} className="cryptoImg" />
                <h1>{Data[2].name}</h1>
            <h2>Rank: {Data[2].rank}</h2>
            <h2 style={{"color": "green"}}>Btc Price: {Data[2].btcPrice}</h2>
            <h2 style={{"color": "blue"}}>Change : {Data[2].change}</h2>
        </div>
        <div className="rank">
        <img src={Data[3].iconUrl} className="cryptoImg" />
                <h1>{Data[3].name}</h1>
            <h2>Rank: {Data[3].rank}</h2>
            <h2 style={{"color": "green"}}>Btc Price: {Data[3].btcPrice}</h2>
            <h2 style={{"color": "blue"}}>Change : {Data[3].change}</h2>
        </div>
        <div className="rank">
        <img src={Data[4].iconUrl} className="cryptoImg" />
                <h1>{Data[4].name}</h1>
            <h2>Rank: {Data[4].rank}</h2>
            <h2 style={{"color": "green"}}>Btc Price: {Data[4].btcPrice}</h2>
            <h2 style={{"color": "blue"}}>Change : {Data[4].change}</h2>
        </div>

        <div className="rank">
        <img src={Data[5].iconUrl} alt="" className="cryptoImg"/>
                <h1>{Data[5].name}</h1>
            <h2>Rank: {Data[5].rank}</h2>
            <h2 style={{"color": "green"}}>Btc Price: {Data[5].btcPrice}</h2>
            <h2 style={{"color": "blue"}}>Change : {Data[5].change}</h2>
        </div>
    
        <div className="rank">
        <img src={Data[6].iconUrl} className="cryptoImg" />
                <h1>{Data[6].name}</h1>
            <h2>Rank: {Data[6].rank}</h2>
            <h2 style={{"color": "green"}}>Btc Price: {Data[6].btcPrice}</h2>
            <h2 style={{"color": "blue"}}>Change : {Data[6].change}</h2>
        </div>
        <div className="rank">
        <img src={Data[7].iconUrl} className="cryptoImg" />
                <h1>{Data[7].name}</h1>
            <h2>Rank: {Data[7].rank}</h2>
            <h2 style={{"color": "green"}}>Btc  Price: {Data[7].btcPrice}</h2>
            <h2 style={{"color": "blue"}}>Change : {Data[7].change}</h2>
        </div>
        <div className="rank">
        <img src={Data[8].iconUrl} className="cryptoImg" />
                <h1>{Data[8].name}</h1>
            <h2>Rank: {Data[8].rank}</h2>
            <h2 style={{"color": "green"}}>Btc Price: {Data[8].btcPrice}</h2>
            <h2 style={{"color": "blue"}}>Change : {Data[8].change}</h2>
        </div>
        <div className="rank">
        <img src={Data[9].iconUrl} className="cryptoImg" />
                <h1>{Data[9].name}</h1>
            <h2>Rank: {Data[9].rank}</h2>
            <h2 style={{"color": "green"}}>Btc Price: {Data[9].btcPrice}</h2>
            <h2 style={{"color": "blue"}}>Change : {Data[9].change}</h2>
        </div>
       
      
    </div>
</div>
);
}
export default CryptoNews;