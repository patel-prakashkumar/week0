const knex = require('../../config/db');

const getProducts = async () => {
  return knex('products').select('*');
};

const createProduct = async (body) => {
  await knex('products').insert({
    id: body.id,
    name: body.name,
    description: body.description,
  });

  return {
    successful: true,
  };
};
module.exports = {
  getProducts,
  createProduct,
};
