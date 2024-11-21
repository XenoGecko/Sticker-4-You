function showSideNav(){
    const sidebar = document.querySelector('.navSide')
    sidebar.style.display = 'flex'
};

function hideSideNav(){
    const sidebar = document.querySelector('.navSide')
    sidebar.style.display = 'none'
};

/* Form */

function validateForm(event) {
    let isValid = true;

    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    const address = document.getElementById('address').value.trim();
    if (address === '') {
        document.getElementById('addressError').textContent = 'Address is required.';
        isValid = false;
    }

    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone must be in format: 123-456-7890.';
        isValid = false;
    }

    const message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message cannot be empty.';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }

    return isValid;
}