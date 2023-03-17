import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  ProductsProvider,
  ProductsContext,
} from '../../contexts/ProductsContext';
import FilterForm from '../FilterForm';

describe('FilterForm', () => {
  it('renders a set of price range buttons', () => {
    render(
      <ProductsProvider>
        <FilterForm />
      </ProductsProvider>
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(10);
    expect(buttons[0]).toHaveTextContent('Below $10');
    expect(buttons[1]).toHaveTextContent('$10 - $20');
    expect(buttons[2]).toHaveTextContent('$20 - $30');
    expect(buttons[3]).toHaveTextContent('$30 - $40');
    expect(buttons[4]).toHaveTextContent('$40 - $50');
    expect(buttons[5]).toHaveTextContent('$50 - $60');
    expect(buttons[6]).toHaveTextContent('$60 - $70');
    expect(buttons[7]).toHaveTextContent('$70 - $80');
    expect(buttons[8]).toHaveTextContent('$80 - $90');
    expect(buttons[9]).toHaveTextContent('$90 - $100');
  });
});
