$(document).ready(function () {
    console.log('ready event');
    var topSlider =  jQuery('.top-slider');
	if(topSlider.length){
		topSlider.slick({
			arrows:false,
			dots:false
		})
	}
});