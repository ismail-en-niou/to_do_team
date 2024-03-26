let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let submit = document.getElementById("submit");
let feedback = document.getElementById("feedback");

submit.onclick = function(e) {
    if (username.value.length < 1 || password.value.length < 1) {
        feedback.textContent = "Veuillez remplir les champs demandés";
        e.preventDefault();
        feedback.style.display = "block";
        //setTimeout(() => {
        //feedback.style.display = "none";}, 3000);
        return;   
    }
};

const usersRef = firebase.firestore().collection('users');
usersRef.where('username', '==', username).where('password', '==', password)
.get()
.then((querySnapshot) => { 
    if (!querySnapshot.empty) {
        feedback.textContent = "Welcome to TO_DO List";
        feedback.style.color = "lightgreen";
    }   
    else {
        feedback.textContent = "Username or Password incorrect !";
    }
}
)
