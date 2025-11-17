// duz yazsa input yox olsun yazilsin xos geldiniz sehv olsa alert cixsinki sehvdi

const email = 'admin@gmail.com';
const password = '12345'

function showForm() {
    let emailInput = document.getElementById('emailInput');
    let passInput = document.getElementById('passInput');
    let welcome = document.getElementById('welcome');
    let form = document.getElementById('form');

    if (email === emailInput.value && password === passInput.value) {
        form.style.display = 'none';
        welcome.style.display = 'block';
    } else {
        alert('Daxil etditiniz melumatlar yanlisdir')
        emailInput.value = "";
        passInput.value = "";

        emailInput.focus();
        return;
    }
}