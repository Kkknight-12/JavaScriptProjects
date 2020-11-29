class DOMHelper {
  static clearEventListners( element ){ // element -> button
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

class Tooltip {
  constructor( closeNotifierFunction ){
    this.closeNotifier = closeNotifierFunction; 
  }

  closeTooltip = () => {
    this.detach();
    // this.closeNotifier();
  }

  detach(){
    this.element.remove()
    this.closeNotifier;
    // setTimeout(function() { this.element.remove(1500) }, 5000)
    
  }
  // detach(){
  // // setTimeout( function() { this.element.remove(1500) }, 5000 )
  // this.element.remove()
  // }

  attach(){  // hasactiveTooltip is set to true from line 65
    this.closeNotifier = true;
    const tooltipElement = document.createElement( 'div' );
    tooltipElement.className = 'card';
    tooltipElement.textContent = 'DUMMY!'
    this.element  = tooltipElement;
    document.body.append(tooltipElement);
    // setTimeout( function() { tooltipElement.remove(1500) }, 5000 )
    this.element.addEventListener( 'click', this.closeTooltip );
  }
}

class ProjectItem {
  hasActiveTooltip = false;

  //             | 3 - EVENT switchPROJECT(ProjectItem) |
  constructor( id, updateProjectListsFunction, type ) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction; // 4 Event
    this.connectMoreInfoButton();
    this.connectSwitchButton(type)
  }

  showMoreInfoHandler(){
    if( this.hasActiveTooltip ){
      return;
    }
    const tooltip = new Tooltip( () => {
      this.hasActiveTooltip = false;
    });
    tooltip.attach();
    // this.hasActiveTooltip = true;
  }

  connectMoreInfoButton() {
     const projectItemElement = document.getElementById( this.id );
     const moreInfoBtn = projectItemElement.querySelector( 'button:first-of-type' );
     moreInfoBtn.addEventListener( 'click', this.showMoreInfoHandler )
  };

  connectSwitchButton( type ){
    const projectItemElement = document.getElementById( this.id );

    let switchBtn = projectItemElement.querySelector( 'button:last-of-type'  );
    switchBtn = DOMHelper.clearEventListners(switchBtn);
    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
    switchBtn.addEventListener( 'click', 
    // 5 - EVENT                         ProjectItem | id
      this.updateProjectListsHandler.bind( null, this.id ) ) // null argument will be kept on hold
  }

  //      switchProjects()
  update( updateProjectListsFn, type ){
    this.updateProjectListsHandler = updateProjectListsFn; // null will take place switchProject()
    this.connectSwitchButton(type);
  }
}

class ProjectList { 
  projects = [];

  constructor( type ) { // type -> active / finished
    this.type = type; 

    // select li of id="active-projects li"/ id="finished-projects li"
    const prjItems = document.querySelectorAll( `#${type}-projects li` );
    // console.log(prjItems);
    for ( const prjItem of prjItems ) {
      this.projects.push( // id   |1- EVENT ON HOLD switchProject()|active/finished
        new ProjectItem( prjItem.id, this.switchProject.bind(this), this.type ) );
    }
  } 

  //                           addProject()
  setSwitchHandlerFunction( switchHandlerFunction ){
    this.switchHandler = switchHandlerFunction;
  }

  addProjects( project ){ 
    //      p3        | p1 , p2
    //      p1 , p2   | p3
    this.projects.push( project ); 
    DOMHelper.moveElement( project.id, `#${this.type}-projects ul`);
    project.update( this.switchProject.bind(this), this.type ); // finished | active
  }

  // 2- PART OF EVENT
  switchProject( projectId ){
    // const projectIndex = this.projects.findIndex( p => { p.id === projectId });
    // this.projects.splice(projectIndex, 1);

    //   addProjects()
    this.switchHandler( this.projects.find( p => p.id === projectId ) );
    // shorter code with filter
    // return/keep item when condition is true
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

// The main difference between 
    // Array.prototype.indexOf() & Array.prototype.findIndex()
    // Array.prototype.indexOf() expects a value as first parameter. This 
    // makes it a good choice to find the index in arrays of primitive types 
    // (like string, number, or boolean).

    // Array.prototype.findIndex() expects a callback as first parameter. Use 
    // this if you need the index in arrays with non-primitive types (e.g.
    // objects) or your find condition is more complex than just a value.


// textContent -> The textContent property sets or returns the text content of the specified node, 
// and all its descendants.
// const projectItemElement = document.querySelector( '#active-projects' );
// const content = projectItemElement.querySelector( 'button' )
// content.textContent = 'na ho paega'
// console.log(content.textContent)

// https://www.w3schools.com/jsref/met_node_clonenode.asp
// cloneNode
// Copy a <li> element from one list to another:

// https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith
// The ChildNode.replaceWith() 
// method replaces this ChildNode in the children list of its parent with a set of Node 
// var parent = document.createElement("div");
// var child = document.createElement("p");
// child.textContent = 'na ho paega'
// var span = document.createElement("span");
// child.replaceWith(span);
// const teex = span.textContent = 'fir bhi na ho paega'
// console.log(teex)