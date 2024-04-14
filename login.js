document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit");
    const feedback = document.getElementById("feedback");

    ;
});

submitButton.addEventListener("click" ,(event)=> {
    event.preventDefault(); // Prevent default form submission

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value;
    const password = passwordInput.value;

    const data = { username: username, password: password };

    loginUser(data)
        .then(responseData => {
            if (responseData.success) {
                console.log("User successfully logged in");
                // Redirect user or perform further actions
            } else {
                console.log("Username or Password incorrect!");
                displayError(responseData.message);
            }
        })
        .catch(error => {
            console.error("There was a problem with the login:", error);
            displayError("Error: " + error.message);
        });
}

function loginUser(data) {
    return fetch("https://doda-o6sz.onrender.com/login", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    });
}

function displayError(message) {
    const feedback = document.getElementById("feedback");
    feedback.textContent = message;
    feedback.style.color = "red";
    feedback.style.display = "block";
}
