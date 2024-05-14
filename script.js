function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    if (name.trim() == "") {
        alert("Please enter your name");
        return false;
    }
    
    if (email.trim() == "") {
        alert("Please enter your email");
        return false;
    }
    
    if (message.trim() == "") {
        alert("Please enter your message");
        return false;
    }
    
    return true;
}
