import { useContext, useState } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(ProductsContext);
  const [selectedSize, setSelectedSize] = useState('');

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  const { name, price, image, description, sizes, color } = product;

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        size: selectedSize,
      });
      setSelectedSize('');
    }
  };

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Color: {color}</p>
      <p>
        Sizes:{' '}
        {sizes && sizes.length ? (
          sizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeSelect(size)}
              className={selectedSize === size ? 'active' : ''}
            >
              {size}
            </button>
          ))
        ) : (
          <span>No sizes available</span>
        )}
      </p>
      <button disabled={!selectedSize} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetailPage;
