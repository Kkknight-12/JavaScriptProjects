// Instatiating Github
// const github = new GitHub;
import { gitHub } from './github.js';

// Init Ui
// const ui = new UI;
import { uiProfile, uiRepos, uishowalert } from './ui.js';

const form = document.querySelector('form')
const searchUser = document.getElementById('searchUser')

form.addEventListener( 'submit', (e) => {
    e.preventDefault()
    // get input text
    const userText = searchUser.value;
    form.reset();

    if(userText !== ''){
        // console.log(userText)

        gitHub(userText)
            .then( data => {
                if( data.profile.message === 'Not Found'){
                    // show alert
                    uishowalert( 'User not found...!', 'alert alert-danger')

                } else {
                    // show Profile
                    uiProfile(data.profile);
                    uiRepos(data.repos)

                }
                // console.log(data)
            })
    }
})
