const formButton = document.getElementById('submit'),
      form =document.getElementById('contact-form'),
      alert = document.getElementById('alert')

formButton.addEventListener('click', formSubmit);
alert.style.display = 'none';

function formSubmit(e){
    e.preventDefault();
    //read the value
    let name = document.getElementById('contact-name');
    let phone = document.getElementById('contact-phone');
    let email = document.getElementById('contact-email');
    let subject = document.getElementById('subject');
    let message = document.getElementById('contact-message');
    let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const formObjects = {
        name: name.value,
        phone: phone.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    if (name.value != '' && email.value != "" && subject.value != '' && message.value != "" && emailValidation.test(email.value)) {
        //fetch request
        fetch('https://vue-http-learning-b7e81-default-rtdb.firebaseio.com/portfolio.json', {
            method: 'POST',
            headers: {
            //tells server we'll add data to the request which would be in json format
            'Content-type': 'application/json'
            },
            body: JSON.stringify( {
            formObjects: formObjects
            }),
        });
        console.log('submit');
        alert.textContent = 'Successful, thanks for reaching out'
        alert.style.display = 'block';
        setTimeout(
            () => {
                alert.style.display = 'none'
            }, 3000); 
    } else {
        alert.textContent = 'Please enter valid response(s)'
        alert.style.display = 'block';
        setTimeout(
            () => {
                alert.style.display = 'none'
            }, 3000);     
    }

    console.log('random');
    

    //   name.value = "";
    //   phone.value = "";
    //   email.value = "";
    //   subject.value = "";
    //   message.value = "";

    // setTimeout(
    //     () => {
    //         window.location.reload();
    //     }, 4000);  
    
    setTimeout(
        () => {
            form.reset();
        }, 3000);   
    
}