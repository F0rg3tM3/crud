const firebaseConfig {
	apiKey: 		"",
	authDomain: 		"",
	projectId: 		"",
	storageBucket:		"",
	messagingSenderId:	"",
	appId:			"",
	measurementId:		"",
	databaseURL:		"https://crud-cc73f.firebaseio.com"
}

const app = firebase.initializeApp(firebaseConfig);

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
