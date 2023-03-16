const ProductItem = ({ name, price, image, description, sizes, color }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>${price}</p>
      <img src={image} alt={name} />
      <p>{description}</p>
      <p>Color: {color}</p>
      {sizes && (
        <div>
          <p>Available sizes:</p>
          <ul>
            {sizes.map((size) => (
              <li key={size}>Size: {size}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default ProductItem;
