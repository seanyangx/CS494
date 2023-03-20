import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { receiveProducts } from './redux/actions';
import useProducts from './hooks/useProducts';
import Product from './components/Product';

function App() {
  const { products: fetchedProducts } = useProducts();
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(receiveProducts(fetchedProducts));
  }, [dispatch, fetchedProducts]);

  return (
    <div className="App">
      <h1>Products</h1>
        <div className="products-list">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
    </div>
  );
}

export default App;
