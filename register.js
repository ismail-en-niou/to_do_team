document.addEventListener("DOMContentLoaded", function() {
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#cpassword");
    const error = document.querySelector("#error");
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    const visibilityToggle1 = document.getElementById("passwordVisibilityToggle1");
    const visibilityToggle2 = document.getElementById("passwordVisibilityToggle2");

    visibilityToggle1.addEventListener("click", function() {
        if (password.type === "password") {
            password.type = "text";
            visibilityToggle1.classList.remove("fa-eye-slash");
            visibilityToggle1.classList.add("fa-eye");
        } else {
            password.type = "password";
            visibilityToggle1.classList.remove("fa-eye");
            visibilityToggle1.classList.add("fa-eye-slash");
        }
    });

    visibilityToggle2.addEventListener("click", function() {
        if (confirmPassword.type === "password") {
            confirmPassword.type = "text";
            visibilityToggle2.classList.remove("fa-eye-slash");
            visibilityToggle2.classList.add("fa-eye");
        } else {
            confirmPassword.type = "password";
            visibilityToggle2.classList.remove("fa-eye");
            visibilityToggle2.classList.add("fa-eye-slash");
        }
    });

<<<<<<< HEAD
    registerForm = document.getElementById("sub");
    registerForm.addEventListener("click", async (e)=> {
=======
    const registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", async function(e) {
>>>>>>> 033443fb2ff1df6d1a136bbfdd0384f01befebea
        e.preventDefault();
        // check if the input are not empty
        if (!username.value || !password.value || !confirmPassword.value) {
            error.innerHTML = "Username or password are not correct!";
            username.value = '';
            password.value = '';
            confirmPassword.value = '';
            return;
        }
        if (!passwordRegex.test(password.value)) {
            error.innerHTML = "Your password must be at least 8 characters long and contain at least one letter, one digit, and one special character (!@#$%^&*).";
            password.value = '';
            confirmPassword.value = '';
            return;
        }

        // check if the password and confirmpassword are the same
        if (password.value !== confirmPassword.value) {
            error.innerHTML = "Passwords do not match.";
            confirmPassword.value = '';
            return;
        }

        error.innerHTML = " ";

<<<<<<< HEAD
        const response = await fetch('https://doda-o6sz.onrender.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: username.value , password: password.value })
        });

        const responseData = await response.json();
        console.log(responseData);
=======
        //const registerData = new FormData(registerForm);
        //const data = Object.fromEntries(registerData);

        // console.log(data);

     /* fetch('https://doda-o6sz.onrender.com/register', {
            method: 'POST',
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: {
                    'content-type': 'application/json'
                }
        }).then((response) => response.json()).then(result => console.log(result)).catch(err => console.log(err))  */

        // Clear any previous errors

        //check if the username already exists
        const response = await fetch('https://doda-o6sz.onrender.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value
            })
        });

        const responseData = await response.json();
>>>>>>> 033443fb2ff1df6d1a136bbfdd0384f01befebea

        console.log(responseData);

        if (responseData.status === 1) {
            error.innerHTML = "Username already exists.";
        } else {
            // store username and password in db
            const utilisateurRef = firebase.database().ref('usersRef');
            const utilisateur = {
                username: username.value,
                password: password.value
            };

            utilisateurRef.push(utilisateur)
            .then(() => {
                console.log("Registration successful !");
                window.location.href = 'login.html';
            })
            .catch(error => {
                console.error("Error adding data to Firebase database:", error);
                error.innerHTML = "An error occurred during registration!";
            }); 
        }
    });
<<<<<<< HEAD
})


=======
})
>>>>>>> 033443fb2ff1df6d1a136bbfdd0384f01befebea
