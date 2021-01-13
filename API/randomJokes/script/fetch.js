const url = "https://api.chucknorris.io/jokes/random";
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
const btn = document.querySelector('.btn');

function displayData( {value:joke} ){
    img.classList.add('shake-img')
    // const  {value:joke} = JSON.parse( data );
    content.textContent = joke;
    const random = Math.random()*1000;
    setTimeout(()=> {
        img.classList.remove('shake-img')
    }, random )
}

btn.addEventListener('click', 
async () => {
    try {
        const data = await fetch(url)
        const reponse = await data.json();
        displayData(reponse);
    } catch (err){
        console.log(err);
    }
});
// btn.addEventListener('click', () => {
//    fetch(url)
//         .then( (data) =>   data.json()  )
//         .then( (response)  => displayData(response) )
//         .catch( (err) => console.log(err) )
// })