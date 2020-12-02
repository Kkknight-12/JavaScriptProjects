// class Book {
//     constructor( title, author, isbn ){
//         this.title = title;
//         this.author = author;
//         this.isbn = isbn;
//     }
// }

// class UI {

//     addBookToList( book ){

//         const list = document.getElementById( 'book-list' );
//         // Create tr element
//         const row = document.createElement( 'tr' );
//         // Insert cols
//         row.innerHTML = `
//             <td>${book.title}</td>
//             <td>${book.author}</td>
//             <td>${book.isbn}</td>
//             <td><a href="#" class="delete" >X<a></td>
//         `;
//         list.appendChild(row);
//     }

//     // 
//     showAlert( message, className ) {
//         // Create div
//         const div = document.createElement( 'div' );
//         // Add classes
//         div.className = `alert ${className}`;
//         // Add text
//         div.appendChild(document.createTextNode(message));
//         // Get parent
//         const container = document.querySelector( '.container' );
//         // Get form
//         const form = document.querySelector( '#book-form' );
//         // Insert alert
//         container.insertBefore( div, form );

//         // Timeout after 3 sec
//         setTimeout( function (){
//             document.querySelector( '.alert' ).remove();
//         }, 3000 );
//     }

//     // 
//     deleteBook( target ) {
//         if( target.className === 'delete' ) {
//         target.parentElement.parentElement.remove();
//         }
//     }

//     // 
//     clearFields() {
//     document.getElementById('title').value = '';
//     document.getElementById('author').value = '';
//     document.getElementById('isbn').value = '';
//     }
// }

// EVENT Listners 
// Event Listner to add books
// document.getElementById( 'book-form' ).addEventListener( 'submit',
//  function(e){
//         // Get form values
//         const title = document.getElementById( 'title' ).value;
//         const author = document.getElementById( 'author' ).value;
//         const isbn = document.getElementById( 'isbn' ).value;

//     // Instantiate book
//     // when the paramater inside class is not defined
//     // it seek after id in html-> id of title, author, isbn
//     const book = new Book( title, author, isbn );

//     // Instantiate UI
//     const ui =  new UI();

//     // Validate
//     if( title === '' || author === '' || isbn === '' ){
//         // Error alert
//         ui.showAlert( 'Please fill in all fields', 'error' );
//     } else {
//         // Add book to list
//         ui.addBookToList(book)

//         // Show sucess
//         ui.showAlert( 'Book Added!', 'success' );
    
//         // Clear fields
//         ui.clearFields();
//     }
//     e.preventDefault();
// } 
// );

// // 
// // Event Listner to remove books
// document.getElementById( 'book-list' ).addEventListener('click',
//     function(e){

//         // Instnatiate UI
//         const ui = new UI();

//         // Delete book
//         ui.deleteBook( e.target );

//         // show message
//         ui.showAlert( 'Book Removed', 'success');

//         e.preventDefault();
//     }
// );


class AddBook {
    constructor( title, author, isbn ){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    addBookToList( ){

        const list = document.getElementById( 'book-list' );
        // Create tr element
        const row = document.createElement( 'tr' );
        // Insert cols
        row.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><a href="#" class="delete" >X<a></td>
        `;
        list.appendChild(row);
    }
    // 
    showAlert( message, className ) {
        // Create div
        const div = document.createElement( 'div' );
        // Add classes
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector( '.container' );
        // Get form
        const form = document.querySelector( '#book-form' );
        // Insert alert
        container.insertBefore( div, form );

        // Timeout after 3 sec
        setTimeout( function (){
            document.querySelector( '.alert' ).remove();
        }, 3000 );
    }

    // 
    deleteBook( target ) {
        if( target.className === 'delete' ) {
        target.parentElement.parentElement.remove();
        }
    }

    // 
    clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
    }

}

class EventOne{
    // constructor(eventOnes){
    //     this.eventOnes = eventOnes;
    // }

    eve(){
        const eventOnes = document.getElementById( 'book-form' );
        // for(let eventOne of eventOnes){
        //     title = eventOne.getElementById( 'title' ).value,
        //     author = eventOne.getElementById( 'author' ).value,
        //     isbn = eventOne.getElementById( 'isbn' ).value;

        // }
        eventOnes.addEventListener( 'click', function(){
          
            // title = document.getElementById( 'title' ).value,
            // author = document.getElementById( 'author' ).value,
            // isbn = document.getElementById( 'isbn' ).value;

        
            console.log(eventOne)
        }  )
    //     // Get form values
    //     const title = eventOne.getElementById( 'title' ).value;
    //     const author = eventOne.getElementById( 'author' ).value;
    //     const isbn = eventOne.getElementById( 'isbn' ).value;

    // // Instantiate book
    // // when the paramater inside class is not defined
    // // it seek after id in html-> id of title, author, isbn
    // const book = new Book( title, author, isbn );

    // // Instantiate UI
    // const ui =  new UI();

    // // Validate
    // if( title === '' || author === '' || isbn === '' ){
    //     // Error alert
    //     ui.showAlert( 'Please fill in all fields', 'error' );
    // } else {
    //     // Add book to list
    //     ui.addBookToList(book)

    //     // Show sucess
    //     ui.showAlert( 'Book Added!', 'success' );
    
    //     // Clear fields
    //     ui.clearFields();
    // }
    // e.preventDefault();
} 
}
a = new EventOne()
a.eve();

// class App {

//     static init(){
//         const eventOnes = document.getElementById( 'book-form' );
//         let e = new EventOne();
//     document.addEventListener( 'submit', e( eventOnes )  )
//     }
    
//     // static init(){
    
//     // }
// }

// App.init();

// 
// Event Listner to remove books
// document.getElementById( 'book-list' ).addEventListener('click',
//     function(e){

//         // Instnatiate UI
//         const ui = new UI();

//         // Delete book
//         ui.deleteBook( e.target );

//         // show message
//         ui.showAlert( 'Book Removed', 'success');

//         e.preventDefault();
//     }
    
// }