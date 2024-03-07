import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";

export const getUser = async (UserId) => {
  // const docRef = doc(CHEMIN)
  const docRef = doc(db, "users", UserId);

  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data();
    return userReceived;
  }
};

// Quand une fonction retourne une promesse, cette promesse ne peut avoir que 3 valeurs possibles :
// 1er cas : promesse en cours d'achèvement => Promise (pending)
// 2ème cas : résultat positif de la promesse achévée => résultat positif (fulfilled)
// 3ème cas : résultat négatif de la promesse achevée => résultat négatif (rejected)

export const createUser = async (userId) => {
  //setDoc(CHEMIN, DATA, OPTIONS)
  const docRef = doc(db, "users", userId);

  const newUserToCreate = {
    username: userId,
    menu: fakeMenu.LARGE,
  };

  await setDoc(docRef, newUserToCreate);

  return newUserToCreate;
};

export const authenticateUser = async (userId) => {
  const existingUser = await getUser(userId);
  if (!existingUser) {
    const newUser = await createUser(userId);
    return newUser;
  }
  return existingUser;
};
