const url = "https://api.chucknorris.io/jokes/random";

function getData(url){
    const xhr =  new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange = function(){
        if (xhr.readyState  !== 4) return;
        if (xhr.status === 200) {
            const  {value:joke} = JSON.parse( xhr.responseText );

            content.textContent = joke;
        }else {
            console.log( {
                status: xhr.status,
                text: xhr.statusText,
            })
        }
    }
}

// ("GET", url)

const content = document.querySelector('.content');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
   getData(url)
})

// 
// 
// 
// const url = "https://api.chucknorris.io/jokes/random";

// function getData(url){
//     const xhr =  new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.send();
//     xhr.onreadystatechange = function(){
//         if (xhr.readyState  !== 4) return;
//         if (xhr.status === 200) {

//             img.classList.add('shake-img')
//             const  {value:joke} = JSON.parse( xhr.responseText );
//             content.textContent = joke;
//             const random = Math.random()*1000;
//             setTimeout(()=> {
//                 img.classList.remove('shake-img')
//             }, random )

//         }else {
//             console.log( {
//                 status: xhr.status,
//                 text: xhr.statusText,
//             })
//         }
//     }
// }

// // ("GET", url)

// const content = document.querySelector('.content');
// const img = document.querySelector('.container img');
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//    getData(url)
// })