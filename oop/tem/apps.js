class ProjectItem{
    constructor(project){
        this.addproject(project)
    }

    addproject(project){
        Item.runner(project)
    }
}

class Item {
    static runner(project){
        // this.project = project;
        // console.log(project.push({id:'p3'}))
        project.push( {id:'p3'} );
        const newProject = project
        for( const x  in newProject ) {
            console.log( (newProject[x]).id )
        }
        console.log(JSON.stringify(newProject))
    }
}

class App{
    static init(){
        const ll = new ProjectItem( projectItem )
    }
}

const projectItem =[ {id: "p1"}, {id: "p2"} ]
App.init();