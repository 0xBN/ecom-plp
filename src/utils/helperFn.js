export const formatPrice = (price) => {
  if (price === null || price === undefined || isNaN(Number(price))) {
    return '';
  }
  return `$${Number(price)}`;
};

export const handleMenuClick = () => {
  const elem = document.activeElement;
  if (elem) {
    setTimeout(() => {
      elem?.blur();
    }, 150);
  }
};
