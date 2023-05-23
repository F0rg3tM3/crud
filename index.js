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

function CRUD_Create(fname, lname, uname, pword, fsubj) {
	
	// CREATE FUNCTION
	console.log("Create Function");

	database.ref('users/' + username).set({
		firstname : fname,
		lastname : lname,
		username : uname,
		password : pword,
		favourite_subject : fsubj
	})
	
	alert('SAVED')
};
window.CRUD_Create = CRUD_Create;

function CRUD_Read(uname) {
	
	// READ FUNCTION
	console.log("Read Function");	
	
	var user_info = database.ref('users/' + uname);
	user_info.on('value', function(snapshot) { 
		var data = snapshot.val (); 
		alert(data.uname);
	});
};
window.CRUD_Read = CRUD_Read;

function CRUD_Update(fname, lname, uname, pword, fsubj) {
	
	// UPDATE FUNCTION
	console.log("Update Function");	

	var user_info = database.ref('users/' + uname);

	user_info.once('value', function(snapshot) {
		if (snapshot.exists()) {
			var update = {
				firstname: fname,
				lastname: lname,
				username: uname,
				password: pword,
				favourite_subject: fsubj
			};
			user_info.update(update);

			alert("Successfully updated!");
		} else {
			alert("Username does not exist!");
		};
	});
};
window.CRUD_Update = CRUD_Update;

function CRUD_Delete(uname, pword) {
	
	console.log("Delete Function");
	
	var user_info = database.ref('users/' + uname);
};
window.CRUD_Delete = CRUD_Delete;
