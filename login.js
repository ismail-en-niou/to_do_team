let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let submit = document.getElementById("submit");
let feedback = document.getElementById("feedback");

//Cas ou l'utilisateur laisser un ou les deux champs vides

/*submit.onclick = function(e) {
        e.preventDefault();
        if (username.trim() === '' || password.trim() === '') {
            feedback.textContent = "Veuillez remplir les champs demandés";
            feedback.style.display = "block";
            return;
        }  
    }
*/

//Verification de password et user_name

/*const usersRef = firebase.firestore().collection('users');
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
*/
//Send request and get response

const data = { username: username, password: password };

fetch("https://doda-o6sz.onrender.com/login", {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => {
    console.log(response)
    if (response.status === 1) {
        console.log("User successful log in");
       
    } else if (response.status === 400 || response.status === 401) {
        console.log("Username or Password incorrect !");
        feedback.textContent = "Username or Password incorrect !";
        feedback.style.color = "red";
        feedback.style.display = "block";
    }
})
.catch(error => console.log(error));
