class ProjectItem{
    constructor(project){  // three -> [ {id: "p1"}, {id: "p2"} ]
        this.addproject(project) // four
    }

    addproject(project){ // [ {id: "p1"}, {id: "p2"} ]
        Item.runner(project) // five
    }
}

class Item {
    static runner(project){   // six [ {id: "p1"}, {id: "p2"} ]
        // this.project = project;
        // console.log(project.push({id:'p3'}))
        project.push( {id:'p3'} ); // [ {id: "p1"}, {id: "p2"}, {id:'p3'} ]
        const newProject = project
        for( const x  in newProject ) {
            console.log( (newProject[x]).id ) // p1, p2, p3
        }
        console.log(JSON.stringify(newProject)) // [ {id: "p1"}, {id: "p2"}, {id:'p3'} ]
    }
}

class App{
    static init(){ // two 
        const ll = new ProjectItem( projectItem ) // [ {id: "p1"}, {id: "p2"} ]
    }
}

const projectItem =[ {id: "p1"}, {id: "p2"} ]
App.init(); // one