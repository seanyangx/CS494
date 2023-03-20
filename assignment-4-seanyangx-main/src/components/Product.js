import React from 'react';

function Product({ product }) {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <img src={product.photoUrl} alt={product.name} />
      <p>Price: ${product.price}</p>
      <p>In Stock: {product.inStock}</p>
      <input type="number" min="0" defaultValue="0" />
      <button>Add to cart</button>
    </div>
  );
}

export default Product;