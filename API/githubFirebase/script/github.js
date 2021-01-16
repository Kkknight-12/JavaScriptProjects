let d = []

db.collection('key').get()
    .then((data) => 
    data.docs.forEach( doc => {
        d.push(doc.data())
    })
)

class GitHub {
    constructor(){
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user){

        // const res =  await fetch("./Script/test.json")
        // const d = await res.json();
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
