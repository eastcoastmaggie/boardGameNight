// set iframe width dynamically
let mapContainer = document.querySelector("#map-outer");
mapContainer.innerHTML = `<iframe class="map" width="${mapContainer.offsetWidth}" height="340" style="border:0"
loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" id="gmap_canvas" 
src="https://maps.google.com/maps?q=lot%2011%20community%20hall%20Freeland%20PE&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>`;