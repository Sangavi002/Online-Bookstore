function Author(name,birthYear, nationality){
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;

    this.getBookInfo = function(){
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author.name}`);
        console.log(`Genre: ${this.genre}`);
        console.log(`Price: $${this.price}`);
    }
}   

let author1 = new Author('Jay Shetty',1987,'United Kingdom');
let author2 = new Author('Alice Walker',1967,'United States');

let book1 = new Book('Think Like a Monk',author1,'Self-help book', 20);
let book2 = new Book('The Color Purple',author2,'Domestic Fiction', 30);

book1.getBookInfo();
book2.getBookInfo();