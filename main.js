/*==================== SAVING INPUT ====================*/
function save() {
  e.preventDefaut()

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let text = document.getElementById("text").value;

  updatingFile(name, email, text);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("text").value = "";
}

// ------------ Firebase > Project settings > CDN > Copy-Paste Config ------------ //
const config = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

firebase.initializeApp(config);

function updatingFile(name, email, text) {
  firebase.firestore().collection("messages").add({
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    name: name,
    email: email,
    message: text,
  });
}
