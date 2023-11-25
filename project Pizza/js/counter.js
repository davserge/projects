/*
var time = 5000; 
var step = 1; 

function orderNum(num, elem) {
	var l = document.querySelector('#' + elem);
	n = 0;
	var t = Math.round(time/(num/step));
	var interval = setInterval(() => {
		n = n + step;
		if (n === num) {
			clearInterval(interval);
		}
		l.innerHTML = n;
	},
		t);
}
orderNum(3500, 'counter-1');
*/
let start // set on the first step to the timestamp provided
const el = document.getElementById('counter-1') // get the element
const el2 = document.getElementById('counter-2') // get the element
const el3 = document.getElementById('counter-3') // get the element
const el4 = document.getElementById('counter-4') // get the element
const final = parseInt(el.textContent, 10) // parse out the final number
const final2 = parseInt(el2.textContent, 10) // parse out the final number
const final3 = parseInt(el3.textContent, 10) // parse out the final number
const final4 = parseInt(el4.textContent, 10) // parse out the final number
const duration = 4000 // duration in ms
const step = ts => {
  if (!start) {
    start = ts
  }
  // get the time passed as a fraction of total duration
  let progress = (ts - start) / duration 

  el.textContent = Math.floor(progress * final) // set the text
  el2.textContent = Math.floor(progress * final2) // set the text
  el3.textContent = Math.floor(progress * final3) // set the text
  el4.textContent = Math.floor(progress * final4) // set the text
  if (progress < 1) {
    // if we're not 100% complete, request another animation frame
    requestAnimationFrame(step) 
  }
}

// start the animation
requestAnimationFrame(step)






