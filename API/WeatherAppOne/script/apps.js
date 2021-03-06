const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time') // img tag with class time
const icon = document.querySelector('.icon img'); // class icon(div) which have img

const updateUI = (data) => {

    // const cityDetails = data.cityDetails;
    // const weather = data.weather;

    // desctructing properties
    const { cityDetails, weather } = data;

    // update details template
    details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&degC</span>
    </div>
    `;

    // updating night/day & icon images
    let timeSrc = null;
    if(weather.IsDayTime){
        timeSrc = './img/day.svg'
    }else{
        timeSrc = './img/night.svg'
    }
    time.setAttribute('src', timeSrc)

    const iconSrc = `./img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute( 'src', iconSrc )
    
    // card.classList.toggle('d-none')
    if( card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }
}

const updatecity = async (city) =>{
    
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return { cityDetails, weather }
};

// 
cityForm.addEventListener( 'submit', e => {
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update the ui with new city
    updatecity(city)
        .then( data => { updateUI(data) })
        .catch( err => { console.log(err) });
})