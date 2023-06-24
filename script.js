const notifyBtn = document.querySelector('.btn');
const message = document.querySelector('#message');
const email = document.querySelector('#email');

notifyBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    var mail_format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(mail_format)){
        alert('Check your email for our notification.');
    }
    else{
        message.innerText = "Please provide a valid email address";
        message.style.color = 'red';
        email.style.border = '1.8px solid red';
    }

});