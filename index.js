import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const firebaseConfig = {
	apiKey: 		"AIzaSyBu65k6Ik4735F9foAilaFsLgATPVBZ8go",
	authDomain: 		"crud-cc73f.firebaseapp.com",
	projectId: 		"crud-cc73f",
	storageBucket:		"crud-cc73f.appspot.com",
	messagingSenderId:	"934235522113",
	appId:			"1:934235522113:web:d92fb427dfcabaf87c72c0",
	measurementId:		"G-LQ24E9LHTF",
	databaseURL:		"https://crud-cc73f.asia-east2.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
var database = getDatabase(app);

function CRUD_Create() {
	console.log("Create Function");
};
window.CRUD_Create = CRUD_Create;

function CRUD_Read() {
	console.log("Read Function");
};
window.CRUD_Read = CRUD_Read;

function CRUD_Update() {
	console.log("Update Function");
};
window.CRUD_Update = CRUD_Update;

function CRUD_Delete() {
	console.log("Delete Function");
};
window.CRUD_Delete = CRUD_Delete;
