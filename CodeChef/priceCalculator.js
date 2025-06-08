const DiscountType = {
  Standard: 6,
  Seasonal: 12,
  Weight: 18
};

function getDiscountedPrice(cartWeight, totalPrice, discountType) {
  const discount = (cartWeight  * discountType) /100
  return totalPrice - discount;
}

console.log(getDiscountedPrice(12, 100, DiscountType.Weight));
