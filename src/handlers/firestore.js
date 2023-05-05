import { setDoc, doc, getDocs, serverTimestamp, collection } from "firebase/firestore";
import { db } from "../lib/firebase.config";

const Firestore = {
  readDocs: (...args) => {
    const [collection_name] = args;
    let docs = [];
    const ref = collection(db, collection_name);

    return new Promise(async (resolve) => {
      try {
        const snapshots = await getDocs(ref);
        snapshots.forEach((doc) => {
          const d = { ...doc.data(), id: doc.id };
          docs.push(d);
        });
        resolve(docs);
      } catch (err) {
        console.log(err);
      }
    });
  },
  writeDoc: (...args) => {
    const [inputs, collection_name] = args;
    return new Promise(async (resolve) => {
      try {
        const randomIndex = Math.floor(Math.random() * 1000000000);
        const docRef = doc(db, collection_name, `${randomIndex}`);
        await setDoc(docRef, { title: inputs.title, path: inputs.path, createdAt: serverTimestamp(), user: inputs.user });
        resolve("new doc successfully inserted");
      } catch (err) {
        console.log(err);
      }
    });
  },
};

export default Firestore;
