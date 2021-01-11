const id = '973870daf46c212654d3',
secret = '180efdaa8baded69c24a185013667188908ffba7',
git = 'https://api.github.com/users/';

class GitHub {
    constructor(){
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user){

        const profileResponse = await fetch(
            git + `${user}?client_id=${id}&client_secret=${secret}`
        )
        const repoResponse = await fetch(
            git + `${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${id}&client_secret=${secret}`
        )
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    };



}

(() => {
    fetch("test.json")
  .then(response => response.json())
  .then(json => console.log(json));
})()