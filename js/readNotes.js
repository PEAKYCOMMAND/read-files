//Read Notes and Make products
function readCreateBase(){


const fs = require('fs')
const away = '/home/peakylinux/code/pj/database/notas.csv'
// const content = 'testedsdsdsds'


//Read File
fs.readFile(away, "utf8", (err, data) => {
  const removeline = data.replace(/(\r\n|\n|\r)/gm, "");
  const separator = removeline.split(',')

  function Products() {

  }
  //method create Object list
  Products.prototype.process = (product, price, quantifier, stock) => {
    this.productname = product
    this.price = price
    this.quantifier = quantifier
    this.stock = stock
    const imageAway = `/home/peakylinux/code/pj/database/img/${imageCurrent}.png`
    return {
      product,
      price,
      quantifier,
      stock,
      imageAway
    }

  }
  //constructor
  let products = new Products();
  let newListProducts = [];
  let imageCurrent = 1;
  //array update newListProducts with properties from separator
  for (hops in separator) {
    let [product, price, quantifier, stock] = separator.splice(0, 4)
    newListProducts.push(products.process(product, price, quantifier, stock));
    imageCurrent++
  }

  console.log(newListProducts);

})

}

module.exports = readCreateBase