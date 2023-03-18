import { useContext, useState } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(ProductsContext);
  const [selectedSize, setSelectedSize] = useState('');
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <p
        className={`min-h-[calc(100vh-120px)] hover:underline text-center text-2xl p-4`}
      >
        <Link to='/'>
          Product not found, check out our amazing collection here instead!
        </Link>
      </p>
    );
  }

  const { name, price, image, description, sizes, color } = product;

  const handleSizeSelect = (size) => setSelectedSize(size);

  const handleAddToCart = () => {
    if (!selectedSize) return;

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.image,
    });
    setSelectedSize('');
    setShowAddedMessage(true);

    setTimeout(() => {
      setShowAddedMessage(false);
    }, 3000);
  };

  const addToCartBtnText = !selectedSize ? 'Choose size' : 'Add To Cart';

  const imageArea = (
    <img
      className={`max-h-[80vh] hover:saturate-150 rounded-sm`}
      src={image}
      alt={name}
    />
  );

  const addToCartButton = (
    <>
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
        <p className={`p-4 font-bold rounded-sm bg-yellow-600`}>Item added!</p>
      )}
    </>
  );

  const sizeSelection = (
    <>
      <div className={`flex flex-col gap-2`}>
        <div>Available Size{sizes.length === 1 ? null : 's'}</div>
        <div className={`flex gap-2`}>
          {sizes && sizes.length ? (
            sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className={`${
                  selectedSize === size
                    ? 'active border bg-green-600 font-bold'
                    : ''
                } border p-2 hover:bg-gradient-to-r from-blue-400 to-teal-500 hover:text-white hover:font-bold rounded-md w-10 h-10`}
              >
                {size}
              </button>
            ))
          ) : (
            <span>No sizes available</span>
          )}
        </div>
      </div>
    </>
  );

  const descriptionArea = (
    <>
      <p>{description}</p>
      <p>Color: {color}</p>
    </>
  );

  const titleArea = (
    <>
      <h2 className={`text-4xl font-bold`}>{name}</h2>
      <hr
        className={`w-1/4 border-0 bg-gradient-to-r from-blue-400 to-teal-500 h-1 `}
      />
      <p>${price}</p>
    </>
  );

  const userInteractionArea = (
    <>
      <div className={`flex items-center justify-between`}>
        <p className={`flex gap-2 items-center`}>{sizeSelection}</p>
        {addToCartButton}
      </div>
    </>
  );

  const detailArea = (
    <div className={`right px-4 md:mb-0 mb-4`}>
      {titleArea}
      <br />
      {descriptionArea}
      <br />
      {userInteractionArea}
    </div>
  );

  return (
    <div
      className={`max-w-5xl mx-auto flex md:flex-row flex-col min-h-[calc(100vh-120px)] md:justify-evenly md:gap-8 gap-4 md:p-4`}
    >
      <div>{imageArea}</div>
      <div>{detailArea}</div>
    </div>
  );
};

export default ProductDetailPage;
