const username = document.querySelector("#username");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#cpassword");
const error = document.querySelector("#error");
const usernameExists = false;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

document.forms["registerForm"].addEventListener("submit", function(e) {

    var inputs = this;

    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            error.innerHTML = "username or password are not correct!";
            username.value = '';
            password.value = '';
            confirmPassword.value = '';
            e.preventDefault();
            return;
        }
    }

    if (usernameExists) {
        error.innerHTML = "Username already exists.";
        username.value = '';
        password.value = '';
        confirmPassword.value = '';
        return;
    }
    else if (!passwordRegex.test(password.value)){
        error.innerHTML = "Your password must be at least 8 characters long and contain at least one letter, one digit, and one special character (!@#$%^&*).";
        password.value = '';
        confirmPassword.value = '';
        e.preventDefault();
        return;
    }
    else if (password.value !== confirmPassword.value) {
        error.innerHTML = "Passwords do not match.";
        confirmPassword.value = '';
        e.preventDefault();
        return;
    }
    else {
        alert('Register form received successfully');
    }
})