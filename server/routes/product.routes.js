// App will crash if the route does not have a matching function in the controller file!

const ProductController = require('../controllers/product.controller');
// imports the controller 

module.exports = (app) => {
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/products/:id', ProductController.getOneProduct);
    app.get('/api/product', ProductController.getAllProducts);
    app.patch('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct); 
}
// this function includes: HTTP verb get, request route, and what the api is to do when that route is hit. SO saying Person.Controller.index is like saying to the route look in the person controller and find the value that goes along with the index. Now execute that value... making it a function.
