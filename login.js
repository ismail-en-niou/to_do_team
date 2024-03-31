let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let submit = document.getElementById("submit");
let feedback = document.getElementById("feedback");

//Cas ou l'utilisateur laisser un ou les deux champs vides

/*submit.onclick = function(e) {
    if (username == ' ' || password.length == ' ') {
        feedback.textContent = "Veuillez remplir les champs demandés";
        e.preventDefault();
        feedback.style.display = "block";
        //setTimeout(() => {
        //feedback.style.display = "none";}, 3000);
        return;   
    }
};*/

//Verification de password et user_name

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

//Send request and get response

fetch("https://doda-o6sz.onrender.com/login", {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => {
        if (response.statut === 0){
            console.log("User successful log in");
            window.location.href = 'todolist.html';
        }
        else if (response.statut === 1){
            console.log("Erreur")
        }
}).then(response => console.log(response))          
.catch(error => console.log(error));
         



