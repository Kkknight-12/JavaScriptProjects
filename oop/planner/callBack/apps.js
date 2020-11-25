// class ProjectItem {
//     constructor( id, updateProjectListsFunction ){ // three
//         this.id = id;
//         this.updateProjectListsHandler = updateProjectListsFunction; // two
//         this.connectSwitchButton();
//         this.ad() 
//     }

//     connectSwitchButton(){
//         const projectItemElement = document.getElementById(this.id);
//         const switchBtn = projectItemElement.querySelector('button:last-of-type')
//         switchBtn.addEventListener( 'click', 
//         this.updateProjectListsHandler ) // one
//     }

//     ad(){
//         console.log('ad')
//     }
// }

// class ProjectList {
//     projects = [ ];

//     constructor( type ) {
//         this.type = type;

//     const projectItems = document.querySelectorAll( `#${type}-projects li` )
//         for( const Item of projectItems ) {
//             this.projects.push(
//                 new ProjectItem( Item.id , this.switchProject.bind(this) ) // four
//             );
//         }
//         // console.log( 'four' )
//         // console.log( this.projects )
//     }

//     setSwitchHandlerFunction( switchHandlerFunction ) {  // 9 
//         // ProjectsList.addProject.bind(finishedProjectsList) 
//         this.switchHandler = switchHandlerFunction; // 8
//     }

//     addProject() {
//         console.log('two')
//         console.log(this) // finishedProjectsList
//         console.log(this.type)
//         console.log('four')
//     }

//     switchProject( projectId ) { // 5
//         console.log('one')
//         this.switchHandler( this.projects.find( p => p.id === projectId ) ) // 7
//         console.log('five')
//         this.projects = this.projects.filter( p => p.id !== projectId );
//     }
// }

// class App {
//     static init(){
//         const activeProjectsList = new ProjectList( 'active' );
//         const finishedProjectsList = new ProjectList( 'finished' );

//         activeProjectsList.setSwitchHandlerFunction(  // 10
//             finishedProjectsList.addProject.bind(finishedProjectsList)
//         )

//         finishedProjectsList.setSwitchHandlerFunction(  
//             activeProjectsList.addProject.bind(activeProjectsList)
//         )
//     }
// }

// App.init();

// const n = new ProjectList();
// n.addProject();

class c {

    constructor( updateProjectListsFunction, id='daddu' ){ // three
        this.id = id
        this.updateProjectListsHandler = updateProjectListsFunction; // two
        this.connectSwitchButton();
    }

        connectSwitchButton() {
        const projectItemElement = document.getElementById('active-projects');
        const switchBtn = projectItemElement.querySelector('button:last-of-type')
        const ID = projectItemElement.getAttribute('id')
        switchBtn.addEventListener( 'click', 
        this.updateProjectListsHandler.bind( null, ID, this.id  ) ) // one
    }
}

class b {

    projects = [1,2,3,4]; 
    constructor(name , ppp){
        this.name = name // c
        this.ppp = ppp

        const d = new c( this.switchProject.bind(this) ); // four
        d
        // this.switchProject;
    }

    setSwitchHandlerFunction( switchHandlerFunction ) {  // 9 
        this.switchHandler = switchHandlerFunction; // 8 addProject.bind( b )
        // console.log(this)
        // this.switchProject();
    }

    addProject(){
        console.log( this ) // seven -> contain class b
        console.log( this.name ) // d -> lalla
        console.log( this.projects.find( p =>  p > 2 ) ) // eight
    }

    switchProject( ID, id ){
        // this.addProject();
        console.log( ID ) // five
        console.log( id ) // five
        console.log( this.projects.find( p =>  p > 3 ) ); // six
        // this.projects.find( p => p === 1 )
        this.switchHandler( console.log( this.ppp ) )   // nine
        // trigger addProject( )
    }
}

class a {

    pr = [4,5,6,7,8,9];

    chappa(){
        console.log(this.pr)
    }

    static init(){
        const ppp = [9098,9868]
        const c = new b( 'lalla',  ppp ); //a
        c.setSwitchHandlerFunction( c.addProject.bind( c ) ); // b
        // c.addProject();   
    }
}

a.init();

const l =  new a ();
console.log( l.pr );
l.chappa();