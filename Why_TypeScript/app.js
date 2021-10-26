function getProduct(id) {
  return {
    id: id,
    name: `hoge ${id}`,
    price: 99
  }
}

const product = getProduct(1);

console.log(`The product ${product.Name} costs $${product.price}`);
// output
// The product undefined costs $99


const showProduct = (name, price)  => {
  console.log(`The product ${name} costs ${price}$.`);
};

const product = getProduct(1);
showProduct(product.price, product.name);

// output
// The product 99 costs hoge 1$.
