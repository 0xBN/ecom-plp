import { Link } from 'react-router-dom';

const ProductItem = ({ id, name, price, image, description, sizes, color }) => {
  return (
    <div className={`py-4 grid place-content-center hover:saturate-200`}>
      <h3 className={`text-center font-bold`}>
        <Link to={`/product/${id}`}>
          {name} - ${price}
        </Link>
      </h3>

      {/* <p>{description}</p> */}
      {/* <p>Color: {color}</p> */}
      {sizes && (
        <div>
          {/* <p>Available sizes:</p> */}
          {/* <ul>
            {sizes.map((size) => (
              <li key={size} data-testid='sizes'>
                {size}
              </li>
            ))}
          </ul> */}
        </div>
      )}
      <Link to={`/product/${id}`}>
        <img
          className={`md:rounded-md md:w-72 md:h-72 object-cover w-screen brightness-75 hover:brightness-100`}
          src={image}
          alt={name}
        />
      </Link>
    </div>
  );
};
export default ProductItem;
