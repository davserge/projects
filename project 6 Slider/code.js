let imgNumber = 0;

function gallery() {
  
  thumbs = document.querySelectorAll('.smallImage');
  maxImgNumber = thumbs.length;

  for (var i = 0; i < thumbs.length; i++) {
  thumbs[i].addEventListener('click', clickThumb);
  }
}
gallery();

function clickThumb() {
  showImage(this.dataset.url);
}

function showImage(path) {
  var image = document.getElementById('mainImage');
  image.setAttribute('src', path);
  for (var i = 0; i < maxImgNumber; i++) {
  if (thumbs[i].getAttribute('data-url') != path) {
    thumbs[i].classList.remove('active');
  } else {
    thumbs[i].classList.add('active');
    imgNumber = i;
  }
  }
}