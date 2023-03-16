import { render, screen } from '@testing-library/react';
import ProductItem from '../ProductItem';

describe('ProductItem component', () => {
  const product = {
    name: 'Test Product',
    price: 9.99,
    image: 'http://example.com/image.jpg',
    color: 'Black',
    description: 'This is an example product.',
    sizes: ['S', 'M', 'L'],
  };

  test('renders product item without error', () => {
    render(<ProductItem />);
  });

  it('displays product name', () => {
    const productName = product.name;
    render(<ProductItem name={productName} />);
    expect(screen.getByText(productName)).toBeInTheDocument();
  });

  it('displays product price', () => {
    const productPrice = product.price;
    render(<ProductItem price={productPrice} />);
    expect(screen.getByText(`$${productPrice.toFixed(2)}`)).toBeInTheDocument();
  });

  it('displays product image', () => {
    const productName = product.name;
    const productImage = product.image;
    render(<ProductItem name={productName} image={productImage} />);
    expect(screen.getByAltText(productName)).toBeInTheDocument();
  });

  it('displays product description', () => {
    const productDescription = product.description;
    render(<ProductItem description={productDescription} />);
    expect(screen.getByText(productDescription)).toBeInTheDocument();
  });

  it('displays all product sizes', () => {
    const productSizes = product.sizes;
    render(<ProductItem sizes={productSizes} />);
    productSizes.forEach((size) => {
      expect(screen.getByText(`Size: ${size}`)).toBeInTheDocument();
    });
  });

  it('displays product color', () => {
    const productColor = product.color;
    render(<ProductItem color={productColor} />);
    expect(screen.getByText(`Color: ${productColor}`)).toBeInTheDocument();
  });
});
