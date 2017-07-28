var _ = require("lodash");

var Store = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
}

Store.prototype = {

  getName: function(name){
    return this.name;
  },

  getCity: function(city){
    return this.city;
  },

  getBalance: function(balance){
    return this.balance;
  },

  addToBalance: function(cash){
    this.balance += cash;
  },

  subtractFromBalance: function(cash){
    this.balance -= cash;
  },

  getInventorySize: function(){
    return this.inventory.length;
  },

  addBookToInventory: function(book){
    this.inventory.push(book);
  },

  clearInventory: function(){
    this.inventory = [];
  },

  findBookByTitle: function(title){
    var titleSearchResult = this.inventory.find(function(book){
      return book.getTitle() === title;
    })
    return titleSearchResult;
  },

  getIndexOfBook: function(book){
   return _.indexOf(this.inventory, book)
    
  },

  listBookDetails: function(book){
    return book.title + " by " + book.author + ", price is: £" + book.price + ", " + book.pageCount + " pages";
  },

  listInventory: function(){
      return this.inventory.map(function(book) {
      return this.listBookDetails(book);
    }.bind(this));
  },





  } // end end end end end end 

  module.exports = Store;