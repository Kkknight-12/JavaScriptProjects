class Book {
    constructor( title, author, isbn, para ){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.para = para;
    }

    addBook(book){
        console.log( book.title, book.author, book.isbn, book.para )
    }
    addDetails(){
        console.log( this.title, this.author, this.isbn, this.para )
    }
}

class IU {
    addBook(book){
        console.log( book.title, book.author, book.isbn, book.para )
    }
}

// when we do not keep the parameter in quote
// parameter are taken as id
const book = new Book( title, author, isbn, para );
console.log(book);
book.addBook(book);
book.addDetails();

// 
const ui = new IU();
ui.addBook(book);
