$('body').scrollspy({ target: '#navbar-site' })

$(document).click(function(e) {
	if (!$(e.target).is('.container-fluid')) {
    	$('.collapse').collapse('hide');	    
    }
});