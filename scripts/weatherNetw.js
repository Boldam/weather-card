const key = "E3n9KlUR5b4TunfIhig6ClghQ83WgHh7"

const getWeather = async (id) => {
    
     const base = "https://dataservice.accuweather.com/currentconditions/v1/";
     const query = `${id}?apikey=${key}`;

     const response = await fetch(base + query);
     const data = await response.json();

    return data[0];
}

const getCity = async (city) => {
        
    const base ="https://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    let response = await fetch(base + query);
    let data = await response.json();

    return data[0];
}
 
