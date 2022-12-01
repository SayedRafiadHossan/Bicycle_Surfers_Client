import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const firebaseAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default firebaseAuthentication;
