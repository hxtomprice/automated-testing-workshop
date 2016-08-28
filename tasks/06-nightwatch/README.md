# Task 1 - Nightwatch

Nightwatch is a framework for writing selenium tests. It alows you to load your
webpage in the browser, run commands against it, and perform assertions to check
that it is behaving as expected.

We choose to use Nightwatch for its clean syntax and extendability.

In this exercise you will need to write a test in nightwatch which covers the
test website.


## More about Nightwatch

### Globals
You can define data in the globals object which will be accessible in all of
your tests. This can be used for anything that you want to keep consistent
throughout the flow. We use this for test data such as locations to search for
and products to book.


### Page objects
Page objects are used to abstract away the complexities of your website so that
you don't need knowledge of them within your test.

A `Page` doesn't have to be a physical page, rather a logical section of the
website. You may want to create a page for a `basket` which is used on several
different pages.

#### elements
Elements are a mapping between elements on the page and what we want to call
them. For example you could define a `bookButton` element which referes to
`button.book-button`. In your test you can now tell nightwatch to click the
`bookButton` element, and you don't need to know the markup for this.

#### sections
A section is a group of elements. You can use this to split up your object and
make it easier to understand. 

#### url
The url is an optional property on the page object. If defined it will be used
to help you navigate to the page. The url can be a string or a function. You can
use a function to build up a dynamic url.

#### navigate
Navigate is a built in function which will send the browser to the url defined
on the `url` property. You can also overwrite the navigate function to give you
more flexibility. For example if your website follows a flow it might not be
possible to go directly to a url, in which case you will have to follow a few
steps beforehand.

#### commands
Each page can have it's own custom commands. These are specific pieces of
functionality for your page. For example if you have a payment form you may want
a command which automatically fills it out for you so that you don't need to
duplicate this logic in any tests which go through this.


### Custom commands
Custom commands allow you to extend the existing suite of helper functions which
Nightwatch already provides so that you can reuse common functionality.


## References
* [nightwatch](http://nightwatchjs.org/)
