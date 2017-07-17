# Task 2 - Asynchronous code

This exercise will get you familiar with some of the common practices used when
testing asynchronous javascript.

In this exercise you will be testing the callback of a function is used as
expected. You will also need to ensure that `done` is used correctly otherwise
the tests wont run.

When you are testing asynchronous code you will often need to put your
assertions in the callback of the function you are testing.

```
myFunction(params, () => {
  // Run assertions here
  done()
})
```
