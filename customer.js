var _ = require("lodash");

var Customer = function(name, city, wallet) {
  this.name = name;
  this.city = city;
  this.wallet = wallet;
  this.collection = [];
  this.otherCollection = 2.99;
}

Customer.prototype = {

  getName: function(name){
    return this.name;
  },

  getCity: function(city){
    return this.city;
  },

  getWallet: function(wallet){
    return this.wallet;
  },

  addToWallet: function(cash){
    this.wallet += cash;
  },

  subtractFromWallet: function(cash){
    this.wallet -= cash;
  },

  getCollectionSize: function(){
    return this.collection.length;
  },

  addBookToCollection: function(book){
    this.collection.push(book);
  },

  clearCollection: function(){
    this.collection = [];
  },

  findBookByTitle: function(title){
    var titleSearchResult = this.collection.find(function(book){
      return book.getTitle() === title;
    })
    return titleSearchResult;
  },

  canBuyBook: function(book){
    if (this.wallet >= book.getPrice()){
      this.wallet -= book.getPrice();
      this.addBookToCollection();
    } else {
      return false;
    };
  },

  sellBook: function(book){
      _.remove(this.collection, book);
      this.wallet += book.getPrice();
    },

    getCollectionValue: function(){
       return (_.sumBy(this.collection, 'price'));
    },

    getCollectionValueByGenre: function(selection){
     filteredCollection = (_.filter(this.collection, {'genre' : selection}));
     // return _.sumBy(filteredCollection, 'price');
     return this.getCollectionValue(filteredCollection);
    },

    viewLongestBook: function(){
      sortedCollection = (_.sortBy(this.collection, ['pageCount']));
      sortedCollection2 = sortedCollection.reverse();
      return sortedCollection2[0];
    },

    getIndexOfBook: function(book){
     return (_.indexOf(this.collection, book));
    },

    sortBooksAscendingPrice: function(){
      ascendingPrice = (_.sortBy(this.collection, ['price']));
      return ascendingPrice;
    },

    sortBooksDescendingPrice: function(){
      return ascendingPrice.reverse();
    },

    compareCollection: function(){
      if (this.getCollectionValue() >= this.otherCollection) {
        return true;
      } else {
      return false;
    };
    }






  } // end end end end end end 

  module.exports = Customer;