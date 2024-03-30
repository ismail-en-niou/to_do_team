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

    registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", function(e) {
        e.preventDefault();
        // check if the input are not empty
        if (!username.value || !password.value || !confirmPassword.value) {
            error.innerHTML = "Username or password are not correct!";
            username.value = '';
            password.value = '';
            confirmPassword.value = '';
            return;
        }

/*
        //check if the username already exists
        const usersRef = firebase.firestore().collection('users').where("username", "==", username).get();
        usersRef.then((querysnapshot) => {
        
            if (!querysnapshot) {
                error.innerHTML = "Username already exists."
            } else {
                // save the data in the database
                usersRef.set(true)

                // send a req to the API
                fetch('https://doda-o6sz.onrender.com/register', {
                    method: 'POST',
                    body: JSON.stringify({
                        username,
                        password
                    }),
                    headers: {
                        'content-type': 'application/json'
                    }
                }).then((response) => {
                    if (response.ok) {
                        alert("Registration successful !");
                        window.location.href = 'login.html';
                    } else {
                        throw new Error("Registration failed !")
                    }
                }).catch((error) => {
                    console.error(error);
                    alert("An error occurred during registration !")
                })
            }
        }) */

        // check if the user enter the correct password
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

        error.innerHTML = "";

        const registerData = new FormData(registerForm);
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

        fetch('https://doda-o6sz.onrender.com/register', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'content-type': 'application/json'
            }
        }).then(async (response) => {
            const data = await response.json();
            const statusData = data.status;
            const messageData = data.message;

            console.log(statusData);

            console.log(messageData);

            //console.log(response);

        }).catch(err => console.log(err))




    });
});
