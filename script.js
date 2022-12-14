// set iframe width dynamically
let mapContainer = document.querySelector("#map-outer");
mapContainer.innerHTML = `<iframe class="map" width="${mapContainer.offsetWidth}" height="500" style="border:0"
 allowfullscreen referrerpolicy="no-referrer-when-downgrade" id="gmap_canvas" 
src="https://maps.google.com/maps?q=lot%2011%20community%20hall%20Freeland%20PE&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>`;

// expand faqs answers
let questions = document.querySelectorAll(".question");
for(let question of questions){
    question.parentElement.addEventListener('click', expandAnswer);
}

function expandAnswer(e){
    e.currentTarget.querySelector('.answer').classList.toggle("hidden");
}