var assert = require('assert');
var Store = require('../store.js');
var Book = require('../book.js');


describe('Store', function(){
  var store;
  var book1 = new Book("Christie Golden", "Dark Disciple", "Sci-Fi", 6.99, 313);
  var book2 = new Book("James Luceno", "Tarkin", "Sci-Fi", 5.99, 274);

beforeEach(function(){
  store = new Store("Bookie McBookface Books", "Glasgow", 100);
})

it('should have name', function(){
  assert.strictEqual(store.getName(), "Bookie McBookface Books");
})

it('should have city', function(){
  assert.strictEqual(store.getCity(), "Glasgow");
})

it('should have balance', function(){
  assert.strictEqual(store.getBalance(), 100);
})

it('should be able to add to balance', function(){
  store.addToBalance(50);
  assert.strictEqual(store.getBalance(), 150);
})

it('should be able to subtract from balance', function(){
  store.addToBalance(50);
  store.subtractFromBalance(50);
  assert.strictEqual(store.getBalance(), 100);
})

it('should be able to get inventory size', function(){
  assert.strictEqual(store.getInventorySize(), 0);
})

it('should be able to add book to inventory', function(){
  store.addBookToInventory(book1);
  assert.strictEqual(store.getInventorySize(), 1);
})

it('should be able to clear inventory', function(){
  store.addBookToInventory(book1);
  assert.strictEqual(store.getInventorySize(), 1);
  store.clearInventory();
  assert.strictEqual(store.getInventorySize(), 0);
})

it('should be able to find book by title', function(){
  store.addBookToInventory(book1);
  assert.deepEqual(store.findBookByTitle("Dark Disciple").title, "Dark Disciple");
})

it('should be able to get index of book', function(){
  store.addBookToInventory(book1);
  assert.strictEqual(store.getIndexOfBook(book1), 0);
})

it('should be able to list book details', function(){
  store.addBookToInventory(book1);
  assert.deepEqual(store.listBookDetails(book1), "Dark Disciple by Christie Golden, price is: £6.99, 313 pages");
})

it('should be able to list inventory', function(){
  store.addBookToInventory(book1);
  store.addBookToInventory(book2);
  assert.deepEqual(store.listInventory(), ["Dark Disciple by Christie Golden, price is: £6.99, 313 pages", "Tarkin by James Luceno, price is: £5.99, 274 pages" ])
})

xit('should be able to sell book and store balance changes', function(){
  
})


}) // END END END END