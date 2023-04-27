import { getFirestore, setDoc } from "firebase/firestore";
import app from "../lib/firebase.config";

const db = getFirestore(app);

const firestore = {
  writeDoc: (...args) => {
    return new Promise((resolve) => {
      try {
      } catch (err) {
        console.log(err);
      }
    });
  },
};
