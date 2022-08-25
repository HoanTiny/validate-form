const errorName = document.getElementById("massage-error-name");
const errorPass = document.getElementById("massage-error-pass");
const errorRetypePass = document.getElementById("massage-error-retypepass");
const errorMail = document.getElementById("massage-error-mail");
const errorNumberPhone = document.getElementById("massage-error-numberphone");
const btnSubmit = document.querySelector(".form-input-submit");
const form = document.querySelector(".form-validate");

// Biến
const username = document.getElementById("ht");
const password = document.getElementById("pass");
const passwordConfirm = document.getElementById("pass1");
const gmail = document.getElementById("mail");
const numberPhone = document.getElementById("sdt");
const reset = document.querySelector(".form-input-reset");

// Biến massage

// Regex
const nameRegex = /[a-zA-Z]+[0-9]/;
const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const numberPhoneRegex = /^\d+$/;

reset.addEventListener("click", function () {
    document.getElementById("ht").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("pass1").value = "";
    document.getElementById("date").value = "";
    document.getElementById("img").value = null;
});

function showError(input, message) {
    const formControl = input.parentElement.parentElement;
    const errorElement = formControl.querySelector("p");
    errorElement.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement.parentElement;
    const errorElement = formControl.querySelector("p");
    console.log(errorElement);
    errorElement.innerText = "";
}

function checkName(inputName) {
    // Check Name

    if (inputName.value == "") {
        showError(inputName, "Không được để trông");
    } else if (nameRegex.test(inputName.value.trim())) {
        showSuccess(inputName);
    } else if (isNaN(inputName.value)) {
        showSuccess(inputName);
    } else {
        showError(inputName, "Tên không hợp lệ");
    }
}

function checkMail(inputGmail) {
    // Check mail
    if (inputGmail.value == "") {
        showError(inputGmail, "Không được để trống");
    } else if (!inputGmail.value.match(mailRegex)) {
        showError(inputGmail, "mail k hợp lệ");
    } else {
        showSuccess(inputGmail);
    }
}

function checkPassword(inputPassword, maxlength) {
    // Check pass
    if (inputPassword.value == "") {
        showError(inputPassword, "Không để trống");
    } else if (inputPassword.value.length < maxlength) {
        showError(inputPassword, `Mật khẩu trên ${maxlength} ký tự`);
    } else if (!inputPassword.value.match(passRegex)) {
        showError(
            inputPassword,
            "Mật khẩu phải bao gồm ít nhất 1 ký tự đặc biệt, 1 chữ cái in hoa và 1 số"
        );
    } else {
        showSuccess(inputPassword);
    }
}

function checkConfirmPass(inputConfirmPass, password) {
    // Check  pass 2
    if (passwordConfirm.value != password.value) {
        showError(inputConfirmPass, "Mật khẩu nhập lại không đúng");
    } else if (passwordConfirm.value == "") {
        showError(inputConfirmPass, "Không để trống");
    } else {
        showSuccess(inputConfirmPass);
    }
}

function checkNumberPhone(inputNumberPhone) {
    // Check numberPhone
    if (inputNumberPhone.value == "") {
        showError(inputNumberPhone, "Không để trống");
    } else if (!inputNumberPhone.value.match(numberPhoneRegex)) {
        showError(inputNumberPhone, "Chỉ nhập số");
    } else if (inputNumberPhone.value.length < 9) {
        showError(inputNumberPhone, "SDT KHONG HOP LE");
    } else {
        showSuccess(inputNumberPhone);
    }
}

// function checkDisabled() {
//     if (
//         errorName.innerHTML == "" &&
//         errorMail.innerHTML == "" &&
//         errorPass.innerHTML == "" &&
//         errorRetypePass.innerHTML == "" &&
//         errorNumberPhone.innerHTML == ""
//     ) {
//         console.log("Error");
//         btnSubmit.disabled = false;
//         btnSubmit.classList.remove("disabled");
//     } else {
//         btnSubmit.disabled = true;
//         btnSubmit.classList.add("disabled");
//     }
// }

form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkName(username);
    checkPassword(password, 6);
    checkConfirmPass(passwordConfirm, password);
    checkMail(gmail);
    checkNumberPhone(numberPhone);
});
const input = document.querySelectorAll("input");
input.forEach((inp) => {
    inp.addEventListener("blur", (event) => {
        switch (inp.name) {
            case "name":
                checkName(username);
                break;
            case "password":
                checkPassword(password, 6);
                break;
            case "passconfirm":
                checkConfirmPass(passwordConfirm, password);
                break;
            case "mail":
                checkMail(gmail);
                break;
            case "sdt":
                checkNumberPhone(numberPhone);
                break;
            default:
                break;
        }
    });
});
