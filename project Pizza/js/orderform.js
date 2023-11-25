function orderform() {
   var form = document.getElementById('form');
   var text = document.getElementById('formtext');
   var name = document.getElementById('name');
   var text_name = document.getElementById('text_name');


   form.style.display = 'none';
   text.style.display = 'block';

   if(name.value !== ''){
      text_name.innerText = name.value;
  }

}