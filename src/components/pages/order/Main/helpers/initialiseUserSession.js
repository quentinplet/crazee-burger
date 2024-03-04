import { getMenu } from "../../../../../api/product";
import { getLocalStorage } from "../../../../../utils/window";

const initialiseMenu = async (userName, setMenu) => {
  const menuReceived = await getMenu(userName);
  // console.log("menuReceived", menuReceived);
  setMenu(menuReceived);
};

const initialiseBasket = (userName, setBasketProducts) => {
  const basketReceived = getLocalStorage(userName);
  if (basketReceived) setBasketProducts(basketReceived);
};

export const initialiseUserSession = async (
  userName,
  setMenu,
  setBasketProducts
) => {
  await initialiseMenu(userName, setMenu);
  initialiseBasket(userName, setBasketProducts);
};
