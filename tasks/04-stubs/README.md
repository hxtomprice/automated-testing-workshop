# Task 4 - Stubs

Stubs are used when you want to prevent a function from running. You can use
them to manipulate the value a function returns.

In the first part of this exercise you will need to test the `doubleRandom`
function. This uses a random number helper which will need to be stubbed out
so that you can assert that it has correctly doubled the result.

In the second part of the exercise you will need to stub out the `request`
module. This is an asynchronous function so instead of making it `return` a
value you will need to change what it `yields`.
