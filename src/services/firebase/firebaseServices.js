import {
  auth,
  provider,
  signInWithPopup,
} from "../../services/firebase/firebase";
export const servicesFirebase = {
  authWithGooglePopUp: async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      return result;
    } catch (error) {
      return error;
    }
  },
};
