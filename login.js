let username = document.querySelector('#username');
let password = document.querySelector('#pass');
let loginbtn = document.querySelector('#submit');

loginbtn.addEventListener('click', login);

function login() {
    if (username.value == '') {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'popup');
        newDiv.style.display = 'block';
        newDiv.innerHTML = 'Username field is required! <i class="fas fa-times fa-x"></i>';
        document.body.appendChild(newDiv);

        let closeButton = newDiv.querySelector('.fa-x');
        closeButton.addEventListener('click', function() {
            newDiv.style.display = 'none';
        });
        
    } else if (username.value !== '') {
        if (password.value == '') {
            let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'popup');
        newDiv.style.display = 'block';
        newDiv.innerHTML = 'Password field is required! <i class="fas fa-times fa-x"></i>';
        document.body.appendChild(newDiv);

        let closeButton = newDiv.querySelector('.fa-x');
        closeButton.addEventListener('click', function() {
            newDiv.style.display = 'none';
        });
        } else if (password.value !== '' || username.value  !== '') {
            alert(`Login success! Username: ${username.value}. Password: ${password.value}`);
        }
    }
}