// const id = '973870daf46c212654d3',
// secret = '180efdaa8baded69c24a185013667188908ffba7',
// git = 'https://api.github.com/users/';

class GitHub {
    constructor(){
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    // async getIdKey() {
    //    const res =  await fetch("./Script/test.json")

    //    const d = await res.json();

    //    return d
    // };

    async getUser(user){

        const res =  await fetch("./Script/test.json")

       const d = await res.json();

        const profileResponse = await fetch(
            d.git + `${user}?client_id=${d.id}&client_secret=${d.secret}`
        )
        const repoResponse = await fetch(
            d.git + `${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${d.id}&client_secret=${d.secret}`
        )
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    };



}
console.log('./Script/test.json')
// (() => {
//     fetch("./Script/test.json")
//   .then(response => response.json())
//   .then(json => console.log(json));
// })()