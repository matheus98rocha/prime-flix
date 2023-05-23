import {
  auth,
  provider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  logout,
  signOut,
  GithubAuthProvider,
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
  signup: (email, password) => {
    try {
      createUserWithEmailAndPassword(email, password);
    } catch (error) {
      return error;
    }
  },
  logout: () => {
    try {
      return signOut(auth);
    } catch (error) {
      return error;
    }
  },
  loginWithGithub: async () => {
    const newgitProvider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, newgitProvider);
      return result;
    } catch (error) {
      return error;
    }
  },
};
