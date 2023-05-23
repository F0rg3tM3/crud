import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: 		"AIzaSyBu65k6Ik4735F9foAilaFsLgATPVBZ8go",
	authDomain: 		"crud-cc73f.firebaseapp.com",
	projectId: 		"crud-cc73f",
	storageBucket:		"crud-cc73f.appspot.com",
	messagingSenderId:	"934235522113",
	appId:			"1:934235522113:web:d92fb427dfcabaf87c72c0",
	measurementId:		"G-LQ24E9LHTF",
	databaseURL:		"https://crud-cc73f.firebaseio.com"
}

const app = initializeApp(firebaseConfig);

function CRUD_Create() {
	console.log("Create Function");
}

function CRUD_Read() {
	console.log("Read Function");
}

function CRUD_Update() {
	console.log("Update Function");
}

function CRUD_Delete() {
	console.log("Delete Function");
}
