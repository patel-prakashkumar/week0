const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const productsController = require('../controllers/products.controller');

// add SWAGGER documentation
/**
 * @swagger
 * /products:
 *  get:
 *    tags:
 *    - products
 *    summary: Get all products
 *    description:
 *      Will return all products.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  productsController
    .getProducts()
    .then((result) => res.json(result))
    .catch(next);
});
/**
 * @swagger
 * /products:
 *  post:
 *    tags:
 *    - products
 *    summary: Create a Product
 *    description:
 *      Enter Product to Craete.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        id: product Id
 *        name: product
 *        description: Enter product to create.
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - description
 *          properties:
 *            id:
 *             type: integer
 *             format: int64
 *             generated : true
 *            name:
 *               type: string
 *            description:
 *                type: string
 *
 *    responses:
 *      201:
 *        description: product created
 *      500:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  productsController
    .createProduct(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(400).send('Bad request').end();
    });
});

// add SWAGGER documentation
// add POST product route

module.exports = router;
