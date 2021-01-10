const key = 't9legpG9USnQv7mzkPz6kTC1npNtdhWp';


const getWeather = async (locationId) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${locationId}?apikey=${key}`;

    const response = await fetch( base + query );
    const data = await response.json();

    return data[0];
}

const getCity = async (city) =>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const reponse = await fetch( base + query );
    const data = await reponse.json();

    return data[0]
}

// getCity('bhopal')
//     .then( (data) => { console.log(data) } )
//     .catch( (err) => { console.log(err) } );

// getWeather('204408')
//     .then( (data) => console.log(data))