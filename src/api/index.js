import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const fetchSummary = async () => {
    try{
        const response = await axios.get(url);
        return response;
    }catch{
        console.error("[fetchData] Failed");
    }    
}

export const fetchCountries = async () => {
    try{
        const response = await axios.get(url+"/countries");
        return response;
    }catch{
        console.error("[fetchCountries] Failed");
    }
}

export const fetchDaily = async () => {
    try{        
        const {data} = await axios.get(url+"/daily");        
        const formattedData = data.map((dailyData)=> ({
            confirmed: dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        }));  
        console.log(formattedData);
        return formattedData;
        
    }catch{
        console.error("[fetchDaily] Failed");
    }
}