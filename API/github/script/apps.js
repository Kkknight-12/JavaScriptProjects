// Instatiating Github
const github = new GitHub;

// Init Ui
const ui = new UI;

const form = document.querySelector('form')
const searchUser = document.getElementById('searchUser')

form.addEventListener( 'submit', (e) => {
    e.preventDefault()
    // get input text
    const userText = searchUser.value;
    form.reset();

    if(userText !== ''){
        // console.log(userText)

        github.getUser(userText)
            .then( data => {
                if( data.profile.message === 'Not Found'){
                    // show alert

                } else {
                    // show Profile
                    ui.showProfile(data.profile);

                }
                // console.log(data)
            })
    }
})