import { initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from 'firebase/firestore';
import { API_KEY } from "../../constants/envValues";

export class Database {
    constructor() {
        const firebaseConfig = {
            apiKey: API_KEY,
            authDomain: "it-todo-list-bfd1e.firebaseapp.com",
            projectId: "it-todo-list-bfd1e",
            storageBucket: "it-todo-list-bfd1e.appspot.com",
            messagingSenderId: "914302045923",
            appId: "1:914302045923:web:9d6c5dd75043cf2cf0ffd6",
            measurementId: "G-8RMV8MQCDR"
        };

        const app = initializeApp(firebaseConfig);
        this._database = getFirestore(app);
    }

    create(collectionKey, body) {
        const collectionRef = collection(this._database, collectionKey);
        return addDoc(collectionRef, body);
    }

    read(collectionKey) {
        const collectionRef = collection(this._database, collectionKey);
        return getDocs(collectionRef).then((documents) => {
            return documents.docs.map((doc) => ({...doc.data(), id: doc.id}))
        });
    }

    update(collectionKey, id, body) {
        const document = doc(this._database, collectionKey, id);
        return updateDoc(document, body);
    }

    delete(collectionKey, id) {
        const document = doc(this._database, collectionKey, id); 
        return deleteDoc(document);
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }
}