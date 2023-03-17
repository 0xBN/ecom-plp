export const formatPrice = (price) => {
  if (price === null || price === undefined || isNaN(Number(price))) {
    return '';
  }
  return `$${Number(price)}`;
};
