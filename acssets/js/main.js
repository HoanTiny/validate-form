function checkform() {
    // Biến
    var name = document.getElementById("ht").value;
    var password = document.getElementById("pass").value;
    var password1 = document.getElementById("pass1").value;
    var gmail = document.getElementById("mail").value;
    var numberPhone = document.getElementById("sdt").value;
    var reset = document.querySelector(".form-input-reset");

    // Biến massage
    var errorName = document.getElementById("massage_error_name");
    var errorPass = document.getElementById("massage_error_pass");
    var errorRetypePass = document.getElementById("massage_error_retypepass");
    var errorMail = document.getElementById("massage_error_mail");
    var errorNumberPhone = document.getElementById("massage_error_numberphone");

    // Regex
    var nameRegex = /[a-zA-Z]+[0-9]/;
    var passRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var numberPhoneRegex = /^\d+$/;

    // Reset input
    reset.addEventListener("click", function () {
        document.getElementById("ht").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("pass1").value = "";
        document.getElementById("date").value = "";
        document.getElementById("img").value = null;
    });

    // Check Name
    if (name == "") {
        errorName.innerHTML = "Ô này không đc để trống";
    } else if (name.match(nameRegex)) {
        errorName.innerHTML = "error";
    } else if (isNaN(name)) {
        errorName.innerHTML = "";
    } else {
        errorName.innerHTML = "k dùng số";
    }

    // Check pass
    if (password == "") {
        errorPass.innerHTML = "Không để trống";
    } else if (password.length < 6) {
        errorPass.innerHTML = "Mật khẩu trên 6 ký tự";
    } else if (password.length < 6) {
        errorPass.innerHTML = "Mật khẩu ko hợp lệ";
        return;
    } else if (!password.match(passRegex)) {
        errorPass.innerHTML = "Mật khẩu không hợp lệ";
    } else {
        errorPass.innerHTML = "";
    }

    // Check  pass 2
    if (password1 != password) {
        errorRetypePass.innerHTML = "Mật khẩu nhập lại không đúng";
        return;
    } else if (password1 == "") {
        errorRetypePass.innerHTML = "Không để trống";
    } else {
        errorRetypePass.innerHTML = "Mật khẩu nhập lại hợp lệ";
        errorRetypePass.style.color = "blue";
    }

    // Check mail
    if (gmail == "") {
        errorMail.innerHTML = "Không để trống";
    } else if (!gmail.match(mailRegex)) {
        errorMail.innerHTML = "mail k hợp lệ";
    } else {
        errorMail.innerHTML = "";
    }

    // Check numberPhone
    if (numberPhone == "") {
        errorNumberPhone.innerHTML = "Không để trống";
        errorNumberPhone.style.color = "red";
    } else if (!numberPhone.match(numberPhoneRegex)) {
        errorNumberPhone.innerHTML = "Chỉ nhập số";
    } else if (numberPhone.length < 9) {
        errorNumberPhone.innerHTML = "SDT KHONG HOP LE";
        return;
    } else {
        errorNumberPhone.innerHTML = "";
    }
}
var btnSubmit = document.querySelector(".form-input-submit");
btnSubmit.addEventListener("click", () => {
    checkform();
});
