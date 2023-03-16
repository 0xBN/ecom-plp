import React, { createContext, useState } from 'react';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [test, setTest] = useState(false);

  return (
    <ProductsContext.Provider
      value={{
        test,
        setTest,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
