# Task 1 - Intro to assertions

Mocha is our test framework of choice. It allows you to test synchronous or
asynchronous javascript using nodejs or in your browser.

Chai is an assertion library which allows your tests to follow more of a natural
language to make tests more readable.

This exercise will get you familiar with both of these.

For this exercise you will need to write tests for a basic library. To do this
you will need to check out the syntax for mocha and chai.


## References
* [mocha](https://mochajs.org/)
* [chaijs](http://chaijs.com/)
* [chai expect syntax](http://chaijs.com/api/bdd/)


## Mocha layout

Mocha uses `describe` `context` and `it` blocks to layout tests.

Usually we would use `describe` to name the file or function we are testing.

`context` is used to give more information on the variables of the test.

`it` is what you expect the outcome to be.

```
describe('myFunction', () => {
  context('when today is Saturday', () => {
    it('should error', () => {

    });

    it('should not return a result', () => {

    });
  });

  context('when today is monday', () => {
    it('should not error', () => {

    });

    it('should return a result', () => {

    });
  });
});
```

If a test fails it will print out to the terminal as
```
my function when today is Saturday should error
```


## Chai Examples

### Basic equality check
```
const foo = 'bar';
expect(foo).to.equal('bar');
```

### Equality for objects
The following will not work
```
const foo = { bar: 'baz' };
expect(foo).to.equal({ bar: 'baz'} );
```
But this will
```
const foo = { bar: 'baz' };
expect(foo).to.equal({ bar: 'baz'} );
```

### Other helpers
The following pairs of assertions are exactly the same.
Chai gives some nice helpers to make your tests more readable.
Use the helpers where possible
```
expect(foo).to.equal(false);
expect(foo).to.be.false();
```
```
expect(foo).to.equal(true);
expect(foo).to.be.true();
```
```
expect(foo).to.equal(null);
expect(foo).to.be.null();
```
```
epxect(foo).to.equal(undefined);
expect(foo).to.be.undefined();
```
```
expect(foo).to.equal(NaN);
expect(foo).to.be.NaN();
```
