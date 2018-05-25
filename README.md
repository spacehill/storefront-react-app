# Storefront Single-Page App 

### Description

This is a very simple shopping cart Web App based on React + Redux + React Router.

### Compromises/Shortcuts

From my perspective, to get a good result for all the components 3 hours are really needed. for me it is common practise to use redux to keep the project readable and for sure extensible, but it takes time to set it up and structure it properly. Topics I thought about but I didn't do because of lack of time:

* reuse of components like QuantityBox or the list items in the carts
* tell the backend guys to add an id to the products :-)
* increase amount of comments / add annotations, the code is not really complicated, but of course documentation (even if it's just annotations and in-line comments) is a must 
* use of constants
* form validation (for the QuantityBox)
* handle "manual" change of quantity in QuantityBox
* test cases
* persisting redux states to be able to have deeplinks to product pages / or not using redux for the selected product - similar for cart
* show nicer content if there are no products available or it fails to load them, same for an empty shopping cart
* layouting: the layout of some of the components is really ugly, sorry for that :-)

### Instructions
This SPA requires [Node 6+](https://nodejs.org/en/) and was created using [create-react-app](https://github.com/facebook/create-react-app).

Once installed, you should install the dependencies by running
```
npm install
```

To serve the application, run
```
npm start
```

To run the test suite, run
```
npm test
```
