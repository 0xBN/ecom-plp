import { useContext, useState } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(ProductsContext);
  const [selectedSize, setSelectedSize] = useState('');
  const [showAddedMessage, setShowAddedMessage] = useState(false);

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
      setShowAddedMessage(true);
      setTimeout(() => {
        setShowAddedMessage(false);
      }, 3000);
    }
  };

  const addToCartBtnText = !selectedSize ? 'Choose size' : 'Add To Cart';

  return (
    <div
      className={`max-w-5xl mx-auto flex md:flex-row flex-col min-h-screen md:justify-evenly md:gap-8 gap-4 md:p-4`}
    >
      <div className={`left`}>
        <img
          className={`max-h-[80vh] hover:saturate-150`}
          src={image}
          alt={name}
        />
      </div>
      <div className={`right px-4`}>
        <h2 className={`text-4xl font-bold`}>{name}</h2>
        <hr
          className={`w-1/4 border-0 bg-gradient-to-r from-blue-400 to-teal-500 h-1 `}
        />
        <p>${price}</p>
        <br />
        <p>{description}</p>

        <p>Color: {color}</p>
        <br />
        <div className={`flex items-center justify-between`}>
          <p className={`flex gap-2 items-center`}>
            Sizes:{` `}
            {sizes && sizes.length ? (
              sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`${
                    selectedSize === size
                      ? 'active border bg-green-600 font-bold'
                      : ''
                  } border p-2 hover:bg-gradient-to-r from-blue-400 to-teal-500 hover:text-white hover:font-bold rounded-md`}
                >
                  {size}
                </button>
              ))
            ) : (
              <span>No sizes available</span>
            )}
          </p>
          {!showAddedMessage && (
            <button
              disabled={!selectedSize}
              onClick={handleAddToCart}
              className={`p-4 rounded-sm  ${
                !selectedSize
                  ? 'bg-red-500 opacity-50'
                  : 'bg-green-500 hover:opacity-60 font-bold'
              }`}
            >
              {addToCartBtnText}
            </button>
          )}
          {showAddedMessage && (
            <p className={`p-4 font-bold bg-yellow-600`}>Item added!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
