// class DOMHelper {
//   static clearEventListners( element ){
//     const clonedElement = element.cloneNoode( true );
//     element.repalceWith( clonedElement );
//     return clonedElement;
//   }

//   static moveElement( elementId, newDestinationSelector ){
//     const element = document.getElementById( elementId );
//     const destinationElement = document.querySelector(newDestinationSelector);
//     destinationElement.append(element)
//   }
// }

class Tooltip {

}

class ProjectItem {
  constructor( id, updateProjectListsFunction ){
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type)
  }

  connectMoreInfoButton() {

  };

  connectSwitchButton( type ){
    const projectItemElement = document.getElementById( this.id );

    let switchBtn = projectItemElement.querySelector( 'button:last-of-type'  );
    // switchBtn = DOMHelper.clearEventListner(switchBtn);
    switchBtn.textContent = type === 'active' ? 'Finish' : 'Active';
    switchBtn.addEventListener( 'click', 
      this.updateProjectListsHandler.bind( null, this.id ) )
  }

  update( updateProjectListsFn, type ){
    this.updateProjectListsHandler = updateProjectListsFn;
    this.connectSwitchButton(type);
  }
}


class ProjectList {
  projects = [];

  constructor( type ) { 
    this.type = type; // type -> active / finished

    // select li of id="active-projects li"/ id="finished-projects li"
    const prjItems = document.querySelectorAll( `#${type}-projects li` );
    // console.log(prjItems);
    for ( const prjItem of prjItems ) {
      this.projects.push( 
        new ProjectItem( prjItem.id, this.switchProjects.bind(this), this.type ) );
    }
    console.log( this.projects );
  }

  setSwitchHandlerFunction( switchHandlerFunction ){
    this.switchHandler = switchHandlerFunction;
  }

  addProjects( project ){
    this.projects.push( project );
    DOMHelper.moveElement( project.id, `#${this.type}-projects ul`);
    projects.update( this.switchProject.bind(this), this.type );
  }
  
  switchProjects( projectId ){
    // The main difference between 
    // Array.prototype.indexOf() & Array.prototype.findIndex()
    // Array.prototype.indexOf() expects a value as first parameter. This 
    // makes it a good choice to find the index in arrays of primitive types 
    // (like string, number, or boolean).

    // Array.prototype.findIndex() expects a callback as first parameter. Use 
    // this if you need the index in arrays with non-primitive types (e.g.
    // objects) or your find condition is more complex than just a value.

    // const projectIndex = this.projects.findIndex( p => { p.id === projectId });
    // this.projects.splice(projectIndex, 1);

    // shorter code with filter
    // return/keep item when condition is true
    this.switchHandler( this.projects.find( p => p.id === projectId ) );

    this.projects = this.projects.filter( p => p.id !== projectId );   

  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList( 'active' );
    const finishedProjectsList = new ProjectList( 'finished' );

    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProjects.bind( finishedProjectsList ));
    
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProjects.bind( activeProjectsList ) );
  }
}

App.init();
