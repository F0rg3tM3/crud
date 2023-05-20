import { initializeApp } from "https://www.gstatic.com/firebase/9.22.0/firebase-app.js";
import { getAnalytics} from "https://www.gstatic.com/firebase/9.22.0/firebase-analytics.js"

const firebaseConfig = {
	apiKey: "AIzaSyBu65k6Ik4735F9oAilaFsLgATPVBZ8go",
	authDomain: "crud-cc73f.firebaseapp.com",
	projectId: "crud-cc73f",
	storageBucket: "crud-cc73f.appspot.com",
	messagingSenderId: "934235522113",
	appId: "1:934235522113:web:d92fb427dfcbaf87c72c0",
	measurementId: "G-LQ24E9LHTF"
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.getAnalytics(app);
