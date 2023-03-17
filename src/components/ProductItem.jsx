const ProductItem = ({ name, price, image, description, sizes, color }) => {
  return (
    <div>
      <hr />
      <h2>{name}</h2>
      <p>${price}</p>
      <p>{description}</p>
      <p>Color: {color}</p>
      {sizes && (
        <div>
          <p>Available sizes:</p>
          <ul>
            {sizes.map((size) => (
              <li key={size} data-testid='sizes'>
                {size}
              </li>
            ))}
          </ul>
        </div>
      )}
      <img src={image} alt={name} />
    </div>
  );
};
export default ProductItem;
