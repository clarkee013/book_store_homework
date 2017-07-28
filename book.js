var Book = function(author, title, genre, price, pageCount){
  this.author = author;
  this.title = title;
  this.genre = genre;
  this.price = price;
  this.pageCount = pageCount;
}

Book.prototype = {
  
  getAuthor: function(){
    return this.author;
  },

  getTitle: function(){
    return this.title;
  },

  getGenre: function(){
    return this.genre;
  },

  getPrice: function(){
    return this.price;
  },

  getPageCount: function(){
    return this.pageCount;  
  }



} // end end end end end end 

module.exports = Book;

