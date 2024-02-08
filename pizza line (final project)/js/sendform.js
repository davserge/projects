let contactForm = document.getElementById('c-form');
let text = document.getElementById('formtext');
let input = document.querySelector('.box-mail');

function sendform() {  
    valid = true;
        if (input.value == "") {
                alert ( "Fill the required field" );
                valid = false;
    }else{
    contactForm.style.display = 'none';
    text.style.display = 'block';
    }

}
