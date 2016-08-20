# alphabit

A small but growing bit of JS code namespaced by the alphabet.

The utilities are meant to be generally useful pure functions, suitable
across a wide variety of projects.   The library favors the opinion that
little tiny pieces of code should not be separately
installed (and managed) dependencies.  Instead it is better to find and import
libraries of code that will fulfill a number of requirements in 
the current project, and thereby dramatically reduce the number of 
dependencies you will need to manage.

The result will also be reduced code size overall, believe it or not,
because 1) tree-shaking (coming VERY soon) will reduce bundles to only
the code that is actually used, and 2) there will be less overhead and
boilerplate to support all those damn imported dependencies (to hopefully
avoid the ripple that becomes a prolific wave when just one of
those libraries is updated.)

Don't agree?  Fine.  You will soon.


## Versioning

We follow semver, but our versions will never involve a breaking
change.   So if you originally installed 0.1.0, but now we're at
3.42.19, then everything you used 0.1.0 for will still work exactly
the same.   This is a function library.  It doesn't do anything except
provide you with a nice set of common pure functions.  A change to 
a function is like making a completely different function.  So in the rare 
case where we think a function SHOULD change, we simply
create a new function that incorporates that change.  

TL;DR: Published Functions Will Never Change.


## What's Included?
 
This library has just started (i.e. v0.0.x), built around a number of
functions we've used over and over again in projects at [Rezometry](http://www.rezometry.com).

To be included, the function must be globally useful, and not terribly
opinionated.  For instance, a function to return the first few chars of 
a string is quite useful, and calling it like this: ```left(str,3)```,
would be pretty hard to argue against.  So it's IN.

Generally the utilities are arranged alphabetically -- not by the
name of the function, but by the name of the either the function's
category, or its target (whichever makes the most sense).  And we're
quite literal about it being alphabetical... The function categories
are exported as single characters that represent the category.  This
is rather opinionated, but it's proven to be quite useful and elegant 
in practice.


## Utility Categories (and how to import them)

You simply import the letter.  e.g. ```import {T} from 'alphabit';```

* D - Dates
* E - Entities (meaning objects that come from somewhere else)
* O - Objects
* T - Text

Or if you want to import several: ```import {D,O,T} from 'alphabit';```




