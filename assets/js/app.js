const form = document.getElementById('contact-form')

form.addEventListener('submit', formSubmit);


function formSubmit(e){
    e.preventDefault();
    //read the value
    let name = document.getElementById('contact-name');
    let phone = document.getElementById('contact-phone');
    let email = document.getElementById('contact-email');
    let subject = document.getElementById('subject');
    let message = document.getElementById('contact-message');

    const formObject = {
        name: name.value,
        phone: phone.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    //fetch request
    fetch('https://vue-http-learning-b7e81-default-rtdb.firebaseio.com/portfolio.json', {
        method: 'POST',
        headers: {
          //tells server we'll add data to the request which would be in json format
          'Content-type': 'application/json'
        },
        body: JSON.stringify( {
          formObject: formObject
        }),
      });

      name.value = "";
      phone.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";

    //   window.location.reload();
}