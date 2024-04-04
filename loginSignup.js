// Login class
class LoginManager {
    constructor() {
        document.addEventListener("DOMContentLoaded", () => {
            document.getElementById("loginBtn").addEventListener("click", this.handleLogin.bind(this));
        });
    }

    // takes values from user and matches from local storage
    handleLogin(event) {
        event.preventDefault();
        const enteredUsernameEmail = document.getElementById("loginEmail").value;
        const enteredPassword = document.getElementById("loginPassword").value;
        let usersArray = localStorage.getItem("usersArray");
        if (usersArray) {
            usersArray = JSON.parse(usersArray);
            let loginSuccessful = false;
            for (let i = 0; i < usersArray.length; i++) {
                const userData = usersArray[i];
                if ((enteredUsernameEmail === userData.email || enteredUsernameEmail === userData.username) && enteredPassword === userData.password) {
                    loginSuccessful = true;
                    break;
                }
            }
            if (loginSuccessful) {
                const loginButton = document.getElementById("logBut");
                const signupButton = document.querySelector(".signup-but");
                loginButton.parentNode.removeChild(loginButton);
                signupButton.parentNode.removeChild(signupButton);
                document.querySelector(".userDropdown").style.display = "block";
                document.getElementById('loginModal').style.display = 'none';
                alert("Login successful!");
            } else {
                alert("Wrong email or password. Please try again.");
            }
        } else {
            alert("No user data found. Please sign up first.");
        }
    }
}
const loginManager = new LoginManager();




// sign up class
class UserSignup {
    // constructor to initialise or get array from local storage
    constructor() {
        this.usersArray = JSON.parse(localStorage.getItem("usersArray")) || [];
        document.addEventListener("DOMContentLoaded", () => {
            this.initialize();
        });
    }
    // calls handleSignup method on signup
    initialize() {
        document.getElementById("signupBtn").addEventListener("click", (event) => {
            event.preventDefault();
            this.handleSignup();
        });
    }
    // takes information from user and store it to local storage
    handleSignup() {
        const username = document.getElementById("exampleDropdownFormUsername1").value;
        const email = document.getElementById("exampleDropdownFormEmail1").value;
        const password = document.getElementById("exampleDropdownFormPassword1").value;
        const userData = {
            username: username,
            email: email,
            password: password
        };
        this.usersArray.push(userData);
        localStorage.setItem("usersArray", JSON.stringify(this.usersArray));
        alert("Sign up successful!");
        this.clearFields();
    }
    // sets the form values emtpy
    clearFields() {
        document.getElementById("exampleDropdownFormUsername1").value = "";
        document.getElementById("exampleDropdownFormEmail1").value = "";
        document.getElementById("exampleDropdownFormPassword1").value = "";
    }
}
const userSignup = new UserSignup();