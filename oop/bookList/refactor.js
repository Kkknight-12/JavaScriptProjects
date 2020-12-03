class Book {
    constructor( title, author, isbn ){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList( book ){

        const list = document.getElementById( 'book-list' );
        // Create tr element
        const row = document.createElement( 'tr' );
        // Insert cols
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
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

class AddBook{
    constructor(book){
        this.book = book;
    }

    triggerOne(){
        const ui =  new UI();
    
        // Validate
        if( this.book.title === '' || this.book.author === '' || this.book.isbn === '' ){
            // Error alert
            ui.showAlert( 'Please fill in all fields', 'error' );
        } else {
            // Add book to list
            ui.addBookToList(this.book)
    
            // Show sucess
            ui.showAlert( 'Book Added!', 'success' );
        
            // Clear fields
            ui.clearFields();
        }  
    }
}

class App{

    static init(){
        const form = document.querySelector('#book-form')
        // 
        form.addEventListener( 'submit', function(e){        
            const title = form.querySelector( '#title' ).value,
            author = form.querySelector( '#author' ).value,
            isbn = form.querySelector( '#isbn' ).value;

            const book = new Book( title, author, isbn );

            const Eve = new AddBook(book);
            Eve.triggerOne()
            e.preventDefault();
        })
    this.initTwo();
    } 

    static initTwo(){
        const dele = document.querySelector('#book-list')
        dele.addEventListener( 'click', function(e) {     
        const ui = new UI();

        // Delete book
        ui.deleteBook( e.target );

        // show message
        ui.showAlert( 'Book Removed', 'success' );

        e.preventDefault();
        } );
    }
}

App.init(); 