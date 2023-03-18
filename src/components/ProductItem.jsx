import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, name, image }) => {
  const productTitle = (
    <h3 className={`text-center font-bold`}>
      <Link to={`/product/${id}`}>{name}</Link>
    </h3>
  );

  const productImageAndLink = (
    <Link to={`/product/${id}`}>
      <img
        className={`md:rounded-md md:w-72 md:h-72 object-cover w-screen brightness-75 hover:brightness-100`}
        src={image}
        alt={name}
      />
    </Link>
  );

  return (
    <div className={`py-4 flex flex-col items-center gap-2 hover:saturate-200`}>
      <div>{productTitle}</div>
      <div>{productImageAndLink}</div>
    </div>
  );
};

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductItem;
