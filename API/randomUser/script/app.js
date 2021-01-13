const URL = 'https://randomuser.me/api/';

const img = document.querySelector('.user-img')
const title = document.querySelector('.user-title')
const value = document.querySelector('.user-value')
const btn = document.querySelector('.btn')
const btns = [ ...document.querySelectorAll('.icon') ]
// console.log(btns)

const getUser = async () => {
    const response = await fetch(URL)
    const data = await response.json()

    // destructring
    const person = data.results[0];
    const { phone, email } = person;
    const { large:image } = person.picture;
    const { password } = person.login;
    const { first, last } = person.name;
    // const { age } = person.dob;
    const { dob: {age} } = person
    // const { number, name } = person.location.street
    const { street: { number, name } } = person.location;

    return{
        phone, email, image, password, age, 
        street: `${number} ${name}`,
        name: `${first} ${last}`
    }
}

const showUser = function() {
    getUser()
        .then( data => console.log(data));

}
// const showUser = async () => {
//     const person = await getUser();
//     console.log(person);
// }


window.addEventListener( 'DOMContentLoaded', getUser )
btn.addEventListener( 'click', ()=> {
    showUser
})
