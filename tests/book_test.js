var assert = require('assert');
var Book = require('../book.js');


describe('Book', function(){
  var book;

beforeEach(function(){
  book = new Book("Christie Golden", "Dark Disciple", "Sci-Fi", 6.99, 313);
})


it('should have an author', function(){
  assert.strictEqual(book.getAuthor(), "Christie Golden");
})

it('should have a title', function(){
  assert.strictEqual(book.getTitle(), "Dark Disciple");
})

it('should have genre', function(){
  assert.strictEqual(book.getGenre(), "Sci-Fi");
})

it('should have price', function(){
  assert.strictEqual(book.getPrice(), 6.99);
})

it('should have page count', function(){
  assert.strictEqual(book.getPageCount(), 313);
})



}) // END END END END