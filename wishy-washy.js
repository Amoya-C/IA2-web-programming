//Name: Amoya Collins
//ID: 2408831
//Assignment#: Individual Assignment #2
//Day/Time of Class: Tuesday @ 11:00 AM
//Module Name/Module Code: CIT2011 - Web Development
//Free Hosting Link: https://amoya-c.github.io/IA2-web-programming/
//Sign-up Page
window.onload = function(){
    const button = document.getElementById("sign-up-button");

    button.onclick = function(event){
        event.preventDefault();
        let Name = document.getElementById("name").value;
        let DOB = document.getElementById("dob").value;
        let Email = document.getElementById("email").value;
        let Username = document.getElementById("username").value;
        let Password = document.getElementById("password").value;

        //Validation of inputs
        if (!Name || !DOB || !Email || !Username || !Password){
            alert("Please fill out all fields to continue.");
            return;
        }

        if (Password.length < 9){
            alert("Password must be at least 9 characters.");
            return;
        }
        
        //Storage
        localStorage.setItem("name", Name);
        localStorage.setItem("dob", DOB);
        localStorage.setItem("email", Email);
        localStorage.setItem("username", Username);
        localStorage.setItem("password", Password);

        //Success message
        alert("Account creation was successful!");

        //redirect to sign-in
        window.location.href = "index.html";
    };
};

//Sign-In Page
window.onload = function(){
    const button = document.getElementById("sign-in-button");

    button.onclick = function(event){
        event.preventDefault();
        let Username = document.getElementById("username").value;
        let Password = document.getElementById("password").value;

        let savedUsername = localStorage.getItem("username");
        let savedPassword = localStorage.getItem("password");

        //Validation of inputs
        if (!Username || !Password){
            alert("Please enter username and password to continue.");
            return;
        }

        if (Username == savedUsername && Password == savedPassword){
            window.location.href = "products.html";     //redirect to Products Page
        } else {
            alert("Incorrect username or password. Please try again");
        } 
    };
};