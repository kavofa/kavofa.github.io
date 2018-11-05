$(document).ready(function(){
var real = [];
var fake = [];
var points = 0;
var correct = 0;
var rn = Math.floor(Math.random()*2);

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	$('#c1').css('font-size', '16px');
	$('#c2').css('font-size', '16px');
}

$.getJSON("out.json", function(json) {
	fake = json;
	$.getJSON("realOut.json", function(json) {
		real = json;
		$('#points').text('Points: '+points+'/'+correct);
function reload() {
	rn = Math.floor(Math.random()*2);
	$('#points').text('Points: '+points+'/'+correct);
	$('#c1').removeClass();
	$('#c2').removeClass();
	switch (rn) {
		case 0:
			$('#c1').text(fake[Math.floor(Math.random()*fake.length)]);
			$('#c2').text(real[Math.floor(Math.random()*real.length)]['text']);
			break;
		case 1:
			$('#c1').text(real[Math.floor(Math.random()*real.length)]['text']);
			$('#c2').text(fake[Math.floor(Math.random()*fake.length)]);
			break;
		}	
}
reload();

	$('#c1').click(function(){
		if(rn == 0) {
			$('#c1').addClass('fake');
		} else if(rn == 1) {
			$('#c1').addClass('real');
			points = points+1;
		}
	correct = correct+1;
	setTimeout(reload, 1500);
	});
        $('#c2').click(function(){
                if(rn == 1) {
                        $('#c2').addClass('fake');
                } else if(rn == 0) {
			$('#c2').addClass('real');
			points = points+1;
		}
	correct = correct+1;
	setTimeout(reload, 1500);
        });
});
});

// Detects if device is on iOS 
const isIos = () => {
	const userAgent = window.navigator.userAgent.toLowerCase();
	return /iphone|ipad|ipod/.test( userAgent );
      }
      // Detects if device is in standalone mode
      const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);
      
      // Checks if should display install popup notification:
      if (isIos() && !isInStandaloneMode()) {
	this.setState({ showInstallMessage: true });
      }

});
