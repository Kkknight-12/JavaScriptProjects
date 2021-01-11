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

    //    console.log(d)
    // };

    async getUser(user){

        const res =  await fetch("./Script/test.json")
        const d = await res.json();
        // console.log(d[0].git)

        const profileResponse = await fetch(
            d[0].git + `${user}?client_id=${d[0].id}&client_secret=${d[0].secret}`
        )
        const repoResponse = await fetch(
            d[0].git + `${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${d[0].id}&client_secret=${d[0].secret}`
        )
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    };
}

// (() => {
//     fetch("./Script/test.json")
//   .then(response => response.json())
//   .then(json => console.log(json));
// })()