function checkform() {
    // Biến
    const name = document.getElementById("ht").value;
    const password = document.getElementById("pass").value;
    const passwordConfirm = document.getElementById("pass1").value;
    const gmail = document.getElementById("mail").value;
    const numberPhone = document.getElementById("sdt").value;
    const reset = document.querySelector(".form-input-reset");

    // Biến massage
    const errorName = document.getElementById("massage-error-name");
    const errorPass = document.getElementById("massage-error-pass");
    const errorRetypePass = document.getElementById("massage-error-retypepass");
    const errorMail = document.getElementById("massage-error-mail");
    const errorNumberPhone = document.getElementById(
        "massage-error-numberphone"
    );

    // Regex
    const nameRegex = /[a-zA-Z]+[0-9]/;
    const passRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const numberPhoneRegex = /^\d+$/;

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
        errorName.innerHTML = "Tên không hợp lệ";
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
    } else if (!password.match(passRegex)) {
        errorPass.innerHTML =
            "Mật khẩu phải bao gồm ít nhất 1 ký tự đặc biệt, 1 chữ cái in hoa và 1 số";
    } else {
        errorPass.innerHTML = "";
    }

    // Check  pass 2
    if (passwordConfirm != password) {
        errorRetypePass.innerHTML = "Mật khẩu nhập lại không đúng";
        return;
    } else if (passwordConfirm == "") {
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
