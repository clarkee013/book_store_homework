var assert = require('assert');
var Customer = require('../customer.js')
var Store = require('../store.js');
var Book = require('../book.js');

describe('Customer', function(){
  var customer;
  var book1 = new Book("Christie Golden", "Dark Disciple", "Sci-Fi", 6.99, 313);
  var book2 = new Book("James Luceno", "Tarkin", "Sci-Fi", 5.99, 274);

beforeEach(function(){
  customer = new Customer("David", "Glasgow", 20);
})

it('should have name', function(){
  assert.strictEqual(customer.getName(), "David");
})

it('should have city', function(){
  assert.strictEqual(customer.getCity(), "Glasgow");
})

it('should have balance', function(){
  assert.strictEqual(customer.getWallet(), 20);
})

it('should be able to add to wallet', function(){
  customer.addToWallet(50);
  assert.strictEqual(customer.getWallet(), 70);
})

it('should be able to subtract from wallet', function(){
  customer.addToWallet(50);
  customer.subtractFromWallet(20);
  assert.strictEqual(customer.getWallet(), 50);
})

it('should be able to get collection size', function(){
  assert.strictEqual(customer.getCollectionSize(), 0);
})

it('should be able to add book to collection', function(){
  customer.addBookToCollection(book1);
  assert.strictEqual(customer.getCollectionSize(), 1);
})

it('should be able to clear collection', function(){
  customer.addBookToCollection(book1);
  assert.strictEqual(customer.getCollectionSize(), 1);
  customer.clearCollection();
  assert.strictEqual(customer.getCollectionSize(), 0);
})


it('should be able to find book by title', function(){
  customer.addBookToCollection(book1);
  assert.deepEqual(customer.findBookByTitle("Dark Disciple").title, "Dark Disciple");
})

it('should be able to buy book if they can afford it', function(){
  customer.canBuyBook(book1);
  assert.strictEqual(customer.getWallet(), 13.01);
  assert.strictEqual(customer.getCollectionSize(), 1);
})

it('should be able to sell book', function(){
  customer.addBookToCollection(book1);
  customer.sellBook(book1);
  assert.strictEqual(customer.getCollectionSize(), 0);
})

it('should be able to get inventory value', function(){
  customer.addBookToCollection(book1);
  assert.strictEqual(customer.getCollectionValue(), 6.99);
})

it('should be able to get inventory value by genre', function(){
  customer.addBookToCollection(book1);
  assert.strictEqual(customer.getCollectionValueByGenre("Sci-Fi"), 6.99);
  assert.strictEqual(customer.getCollectionSize(), 1);
})

it('should be able to sort collection by longest book', function(){
  customer.addBookToCollection(book1);
  customer.addBookToCollection(book2);
  assert.strictEqual(customer.viewLongestBook(), book1);

})

it('should be able to get index of book', function(){
  customer.addBookToCollection(book1);
  assert.strictEqual(customer.getIndexOfBook(book1), 0);
})

it('should be able to sort books ascending by price', function(){
  customer.addBookToCollection(book1);
  customer.addBookToCollection(book2);
  assert.strictEqual(customer.getIndexOfBook(book2), 1);
})

it('should be able to sort books descending by price', function(){
  customer.addBookToCollection(book1);
  customer.addBookToCollection(book2);
  assert.strictEqual(customer.getIndexOfBook(book1), 0);
})


}) // END END END END