class ProjectItem {
    constructor( id, updateProjectListsFunction ){ // three
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction; // two
        this.connectSwitchButton();
        // this.ad() 
    }

    connectSwitchButton(){
        const projectItemElement = document.getElementById(this.id);
        const switchBtn = projectItemElement.querySelector('button:last-of-type')
        switchBtn.addEventListener( 'click', 
        this.updateProjectListsHandler.bind(null, this.id) ) // one
    }

    // ad(){
    //     console.log('ad')
    // }
}

class ProjectList {
    projects = [ ];

    constructor( type ) {
        this.type = type;

    const projectItems = document.querySelectorAll( `#${type}-projects li` )
        for( const Item of projectItems ) {
            this.projects.push(
                new ProjectItem( Item.id , this.switchProject.bind(this) ) // four
                // Object(Item.id)
            );
        }
        // console.log( 'four' )
        // console.log( this.projects )
    }

    setSwitchHandlerFunction( switchHandlerFunction ) {  // 9 
        // ProjectsList.addProject.bind(finishedProjectsList) 
        this.switchHandler = switchHandlerFunction; // 8
        console.log('1')
    }

    addProject(project){
        // console.log('two 2') // 8
        // inside function finishedProjectsList.addProject
        // console.log(this, 'three') // 9 finishedProjectsList
        this.projects.push(project)
        console.log(this.projects)
        // console.log('four 4') // 10
    }

    switchProject( projectId ){ // 5s
        // console.log('one') // 6
        // outside function activeProjectsList.setSwitchHandlerFunction 
        this.switchHandler( this.projects.find( p => p.id === projectId ) ) // 7
        // this.switchHandler( console.log(this) )
        // console.log('five') // 1
        this.projects = this.projects.filter( p => p.id !== projectId );
    }
}

class App {
    static init(){
        const activeProjectsList = new ProjectList( 'active' );
        const finishedProjectsList = new ProjectList( 'finished' );

        activeProjectsList.setSwitchHandlerFunction(  // 10
            finishedProjectsList.addProject.bind(finishedProjectsList)
        )

        console.log('0')

        finishedProjectsList.setSwitchHandlerFunction(  
            activeProjectsList.addProject.bind(activeProjectsList)
        )
    }
}

App.init();

const n = new ProjectList();
// n.addProject();

