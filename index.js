import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDoc, doc, query, setDoc, where, getDocs, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

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
var database = getFirestore(app);


function CRUD_Create(fname, lname, uname, pword, fsubj) {
	
	// CREATE FUNCTION
	console.log("Create Function");

	const usersRef = collection(database, "users");
	
	try {
		const docRef = setDoc(doc(usersRef, uname), {
			firstname: fname,
			lastname: lname,
			username: uname,
			password: pword,
			fav_subj: fsubj
		});

		alert("Saved!")
	} catch(e) {
		alert("An issue occured!");
	}
};
globalThis.CRUD_Create = CRUD_Create;


function CRUD_Read(uname) {
	
	// READ FUNCTION
	console.log("Read Function");	

	const user_info = doc(database, "users", uname)

	getDoc(user_info).then((doc) => {
		document.getElementById("FirstName").text = "First Name: " + doc.data()["firstname"];
		document.getElementById("LastName").text = "Last Name: " + doc.data()["lastname"];
		document.getElementById("Username").text = "User Name: " + doc.data()["username"];
		document.getElementById("FavouriteSubject").text = "Favourite Subject: " + doc.data()["fav_subj"]
		console.log(doc.data())
	})

	
};
globalThis.CRUD_Read = CRUD_Read;

function CRUD_Update(fname, lname, uname, pword, fsubj) {
	
	// UPDATE FUNCTION
	console.log("Update Function");	

	const docRef = doc(database, "users", uname);
	
	getDoc(docRef).then((doc) => {
		if (doc.data()["password"] == pword) {
			updateDoc(docRef, {
				firstname:fname,
				lastname:lname,
				username:uname,
				password:pword,
				fav_subj:fsubj
			})
			alert("Successfully updated!");
		} else {
			alert("Invalid Password!");
		}
	})
};
globalThis.CRUD_Update = CRUD_Update;

function CRUD_Delete(uname, pword) {
	
	// DELETE FUNCTION
	console.log("Delete Function");
	
	const docRef = doc(database, "users", uname)

	getDoc(docRef).then((doc) => {
		if (doc.data()["password"] == pword) {
			deleteDoc(docRef);
			alert("Successfully Removed");
			document.getElementById("FirstName").text = "First Name: "
			document.getElementById("LastName").text = "Last Name: "
			document.getElementById("Username").text = "Username: "
			document.getElementById("FavouriteSubject").text = "Favourite Subject: ";
		} else {
			alert("Password is Invalid!");
		}
	})
};
globalThis.CRUD_Delete = CRUD_Delete;
