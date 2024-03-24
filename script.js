function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "Kyra" && password == "kyky1442") {
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
        setTimeout(function() {
            document.getElementById("popup").style.display = "block";
        }, 1000); // Popup shows after 1 second
    } else {
        alert("Incorrect username or password");
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}