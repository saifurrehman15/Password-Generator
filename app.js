function change() {
    let user = document.getElementById('pass').value;
    document.getElementById('range').innerHTML = user;

}

function generate() {
    let cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let small = 'abcdefghijklmnopqrstuvwxyz';
    let spe = "!@#$%^&*()_+{}|:<>?`\-=[\];',./";
    let num = '123456789';

    let user = document.getElementById('pass').value;

    let userInpmy = document.getElementById('check1');
    let userInpmy2 = document.getElementById('check2');
    let userInpmy3 = document.getElementById('check3');
    let userInpmy4 = document.getElementById('check4')

    let format = '';

    format = '';

    if (userInpmy.checked) {
        format += cap;
    }

    if (userInpmy2.checked) {
        format += small;

    }

    if (userInpmy3.checked) {
        format += spe;

    }

    if (userInpmy4.checked) {
        document.getElementById('passShow').value = format += num;
    }

    let pass = '';

    for (let i = 0; i < user; i++) {
        let random = Math.floor(Math.random() * format.length);
        pass += format[random];
    }

    document.getElementById('passShow').value = pass;//Show Password
    let regex = /[!@#$%^&*()_+{}|:"<>?`\-=[\];',./]/;
    let img = "<image src='password-generator-images/Circle_Warning.png' />"

    if (userInpmy4.checked && pass.length >= 10 && userInpmy.checked && userInpmy2.checked && userInpmy4.checked) {

        document.getElementById('wOrSt').innerHTML = "<div class='warning'><div class='warning-inner2'>" + img + "Strength:Strong </div></div>";

    } else {
        img = "<image src='password-generator-images/Circle-red.png' />"
        document.getElementById('wOrSt').innerHTML = "<div class='warning'><div class='warning-inner'>" + img + "Strength:Weak </div><div class='suggest' onclick='showDialog()' title='Help' id='st'>?</div></div>";

    }

    if (!userInpmy.checked && !userInpmy2.checked && !userInpmy3.checked && !userInpmy4.checked) {
        document.getElementById('passShow').value = "Select Atleast One Format";

        document.getElementById('wOrSt').innerHTML = " ";
    }

    return pass;
};

let regex = /[!@#$%^&*()_+{}|:"<>?`\-=[\];',./]/;

function showDialog() {

    if (regex.test(generate())) {
        alert('Password Length must be eqaul to or greater than 8');
    }
    else if (regex.test(generate()) && generate().length > 7) {
        document.getElementById('st').style.display = 'none';
    }
    else {
        alert('Add Special character for strong Password');

    }
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('eye').addEventListener('click', function () {
        var hh = document.getElementById('passShow');
        if (hh.type === 'password') {
            hh.type = 'text';
            document.getElementById('eye').src = "password-generator-images/visibility_24dp_FILL0_wght400_GRAD0_opsz24.png";
        } else {
            hh.type = 'password';
            document.getElementById('eye').src = "password-generator-images/visibility_off_24dp_FILL0_wght400_GRAD0_opsz24.png";

        }
    });

});

function reset() {
    document.getElementById('passShow').value = "";
    document.getElementById('wOrSt').innerHTML = '';
}











