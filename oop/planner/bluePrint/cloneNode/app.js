class DOMHelper {
    static clearEventListeners( element ){ // element -> button
        const clonedElement = element.cloneNode( true );
        element.replaceWith( clonedElement );
        return clonedElement;
    }

    static moveElement( elementId, newDestinationSelector ){
        const element = document.getElementById( elementId );
        const destinationElement = document.querySelector(newDestinationSelector);
        destinationElement.append(element)
    }
}

class ProjectItem {
    constructor( id, updateProjectListsFunction  ){ // three
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction; // two
        this.connectSwitchButton();
        
    }

    connectSwitchButton(){
        const projectItemElement = document.getElementById( this.id );
        let switchBtn = projectItemElement.querySelector( 'button:first-of-type' )
        switchBtn = DOMHelper.clearEventListeners(switchBtn);
        switchBtn.addEventListener( 'click', 
        this.updateProjectListsHandler.bind(null, this.id) ) // one
    }

    //      switchProjects()
    update( updateProjectListsFn ){
        this.updateProjectListsHandler = updateProjectListsFn; // null will take place switchProject()
        this.connectSwitchButton();
    }
}

class ProjectList {
    projects = [ ];

    constructor( type ) {
        this.type = type;

    const projectItems = document.querySelectorAll( `#${type} li` )
        for( const Item of projectItems ) {
            this.projects.push(
                new ProjectItem( Item.id , this.switchProject.bind(this), this.type ) // four
                // Object(Item.id)
            );
        }
    }

    setSwitchHandlerFunction( switchHandlerFunction ) {  // 9 
        // ProjectsList.addProject.bind(finishedProjectsList) 
        this.switchHandler = switchHandlerFunction; // 8
    }

    addProject(project) {
        // inside function finishedProjectsList.addProject
        this.projects.push(project)
        DOMHelper.moveElement( project.id, `#${this.type}`);
        project.update( this.switchProject.bind(this), this.type );
    }

    switchProject( projectId ) { // 5s
        // outside function activeProjectsList.setSwitchHandlerFunction 
        this.switchHandler( this.projects.find( p => p.id === projectId ) ) // 7
        this.projects = this.projects.filter( p => p.id !== projectId );
    }
}

class App {
    static init() {
        const List1 = new ProjectList( 'myList1' );
        const List2 = new ProjectList( 'myList2' );

        List1.setSwitchHandlerFunction(  // 10
            List2.addProject.bind(List2)
        )

        List2.setSwitchHandlerFunction(  
            List1.addProject.bind(List1)
        )
    }
}

App.init();