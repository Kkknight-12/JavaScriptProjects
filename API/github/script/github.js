const id = '973870daf46c212654d3',
secret = '180efdaa8baded69c24a185013667188908ffba7',
git = 'https://api.github.com/users/';

class GitHub {
    constructor(){

    }

    async getUser(user){
        const profileResponse = await fetch(
            git + `${user}?client_id=${id}&client_secret=${secret}`
        )
        const profile = await profileResponse.json();

        return {
            profile
        }
    };



}