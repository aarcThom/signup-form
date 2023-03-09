function check() {
    var input = document.getElementById('pass_confirm');
    if (input.value != document.getElementById('pass').value) {
        input.setCustomValidity("Please ensure your passwords match");
    } else {
        input.setCustomValidity("");
    }
}