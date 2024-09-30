/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);


function updateBlur() {

	console.log(document.querySelectorAll('.blureffect')); // Check if the element exists
	console.log(document.querySelectorAll('.row')); // Check if the element exists

	// Get the current zoom level
	let zoomLevel = window.devicePixelRatio || 1;
	
	let defaultwidth = 20;
	
	let defaultblur = 11;
	
	// Calculate the blur amount based on zoom (you can adjust this factor)
	let blurAmount = defaultblur / zoomLevel;
	
	// Calculate the blur amount based on zoom (you can adjust this factor)
	let widthAmount = (defaultwidth / zoomLevel)/2;
	
	/*
	document.querySelectorAll('.blureffect').forEach(element => {
		element.classList.add('dynamic-blur');
		
	document.querySelectorAll('.row').forEach(element => {
		element.classList.add('dynamic-blur');
	});
	*/
	
	document.querySelectorAll('.blureffect').forEach(element => {
		element.style.setProperty('--default-width', `${defaultwidth}%`);
		element.style.setProperty('--default-blur', `${defaultblur}px`);
		element.style.setProperty('--dynamic-width', `${widthAmount}%`);
		element.style.setProperty('--dynamic-blur', `${blurAmount}px`);
	});
	
	// Apply the dynamic blur to elements
	/*
	document.querySelectorAll('.row').forEach(element => {
		element.style.setProperty('--default-width', `${defaultwidth}%`);
		element.style.setProperty('--dynamic-width', `${widthAmount}%`);
	});
	*/
}

// Call the update function on load and when the user zooms in or out
window.addEventListener('resize', updateBlur);
window.addEventListener('load', updateBlur);

// Call the updateBlur function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
	updateBlur();  // This will trigger the blur calculation on load
});