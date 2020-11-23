import { useSelector } from "react-redux";

function useTotalCartItem() {
  const listItem = useSelector((state) => state.cart.userCart);
  return !listItem || listItem.length === 0
    ? 0
    : listItem.reduce((sum, item) => sum + item.total, 0);
}

export default useTotalCartItem;
