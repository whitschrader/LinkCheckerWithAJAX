# LinkCheckerWithAJAX Lab

In this lab, you will modify a simple link checking app to use ajax. The basic functionality is a site that allows the user to enter a url.  The site will make a get request on the url and save the http response code.

## Objectives

* Make all of the tests pass (both rails and jasmine)
* The app should never refresh the page
	* Make the index route the root.
	* The user should be able to submit a site to check on the index page
	* The result of create should be appended to the end of the table
	* 
* The request to create a site 

## Hints

* To add newly created sites to the page, first find the table element using $('#siteTable'), then use ```.append("<h1>Some HTML</h1>")```


## Bonus

Add a delete button that issues an http delete on a specific row.  This action also requires an auth token.

## Extra Bonus (Difficult)

Add a shuffle button that will remove all the table rows from the table, make an http GET to refresh the list of sites, then repopulate the table in a random order.  This is difficult.  Check out this post for help: [Shuffle Array](http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array).
