import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function firebaseConfig() {
    const firebaseConfig = {
        apiKey: "AIzaSyBLrK8AbnZAFQBtB0G9EpUJG_3-OactjhQ",
        authDomain: "behoof-admin-d237d.firebaseapp.com",
        databaseURL: "https://behoof-admin-d237d-default-rtdb.firebaseio.com",
        projectId: "behoof-admin-d237d",
        storageBucket: "behoof-admin-d237d.appspot.com",
        messagingSenderId: "334666570574",
        appId: "1:334666570574:web:16e5b052b7950e80e59c1f",
    };

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    return database;
}

export default firebaseConfig;
