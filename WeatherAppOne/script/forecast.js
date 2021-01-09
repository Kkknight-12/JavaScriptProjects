const key = 't9legpG9USnQv7mzkPz6kTC1npNtdhWp';

const getCity = async (city) =>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const reponse = await fetch( base + query );
    const data = await reponse.json();

    return data[0]
}

getCity('bhopal')
    .then( (data) => { console.log(data) } )
    .catch( (err) => { console.log(err) } );