import {
  auth,
  provider,
  signInWithPopup,
} from "./firebase";
export const servicesFirebase = {
  authWithGooglePopUp: async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      return result;
    } catch (error) {
      return error;
    }
  },
  getCurrentUser: () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        unsubscribe();
        resolve(user);
      }, reject);
    });
  },
};
