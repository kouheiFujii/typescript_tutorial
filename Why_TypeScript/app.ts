// 型の定義
interface Product {
  id: number,
  name: string,
  price: number
};

// 明示的に宣言
function getProduct(id) : Product {
  return {
    id: id,
    name: `hoge ${id}`,
    price: 99
  }
}

// キー名が間違っているとエラーが出力される
const product = getProduct(1);
console.log(`The product ${product.Name} costs $${product.price}`);

// 引数に型の指定が行える
const showProduct = (name: string, price: number) => {
  console.log(`The product ${name} costs ${price}$.`);
};

// 引数に渡している値の方が異なっているとエラーが出力される。
const product = getProduct(1);
showProduct(product.price, product.name);
