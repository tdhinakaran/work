function verfun() {
    var fname = document.querySelector("#fname").value;
    var lname = document.querySelector("#lname").value;
    var num = document.querySelector("#num").value;
    var mail = document.querySelector("#mail").value;
    var pswd = document.querySelector("#pswd").value;
    var male = document.querySelector("#male").checked;
    var female = document.querySelector("#female").checked;
    var city = document.querySelector("#city").value;
    var terms = document.querySelector("#terms").checked;
    if (fname == null || fname == "") {
        showPopup();
        document.querySelector("#errorbox").innerHTML = "Enter first name";
    } else if (lname == null || lname == "") {
        showPopup();
        document.querySelector("#errorbox").innerHTML = "Enter last name";
    } else if (num == null || num == "") {
        showPopup();
        document.querySelector("#errorbox").innerHTML = "Enter Mobile number";
    } else if (mail == null || mail == "") {
        showPopup();
        document.querySelector("#errorbox").innerHTML = "Enter Mail ID";
    } else if (pswd == null || pswd == "") {
        showPopup();
        document.querySelector("#errorbox").innerHTML = "Create your Password";
    } else if (male == false && female == false) {
        showPopup();
        document.querySelector("#errorbox").innerHTML = "Select Gender";
    } else if (city == null || city == 0) {
        showPopup();
        document.querySelector("#errorbox").innerHTML = "Select your city";
    } else if (terms == false) {
        showPopup();
        document.querySelector("#errorbox").innerHTML = "Kindly agree the promotions and offers";
    } else {
        showPopup();
        document.querySelector("#errorbox").innerHTML = "Registered Successfully";
    }
}

function showPopup() {
    document.querySelector("#errorbox").style.display = 'block';
    setTimeout(() => {
        document.querySelector("#errorbox").style.display = 'none';
    }, 5000);
}