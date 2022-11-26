import { doc, getDoc } from "firebase/firestore";
import { db } from "./config";

const collectionName = "macronutrientes";
const id = "V0gEhcHP7GxeyhUSVwzs";

export const getAlimentos = () => getDoc(doc(db, collectionName, id));