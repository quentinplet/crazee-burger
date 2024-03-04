import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const syncBothMenus = (userId, menuUpdated) => {
  const docRef = doc(db, "users", userId);

  const newDoc = {
    username: userId,
    menu: menuUpdated,
  };

  setDoc(docRef, newDoc);
};

export const getMenu = async (UserId) => {
  // const docRef = doc(CHEMIN)
  const docRef = doc(db, "users", UserId);

  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const { menu } = docSnapshot.data();
    // console.log("menu", menu);
    return menu;
  }
};
