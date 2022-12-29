const faker = require("@faker-js/faker");

class ClaseProductosTestApi {
    #productos;
    constructor() {
      this.#productos = [];
    }
  
    async create() {
      for (let cantidad = 0; cant < 5; cantidad++) {
        const object = {
          id: cantidad,
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          description: faker.commerce.productDescription(),
          thumbnail: faker.image.technics()
        };
        this.#productos.push(object);
      }
    }
  
    async getAll() {
      await this.create();
      return this.#productos;
    }
  }

module.exports = ProductosTestApi = new  ClaseProductosTestApi();