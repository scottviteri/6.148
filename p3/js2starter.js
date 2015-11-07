$(document).ready(function() {
    var numLevels = 5; // Number of levels
    var currentLevel = 5; // Parachute starts at the highest level
    var currentHeight = 0;
    var parachute = $("#parachute");
    function myFunction(num) {
	if (num == 0){
	    if (currentHeight > 0){
		currentHeight -= 20;
		currentLevel += 1;
	    }
        }else if((num == 1)){
	    if (currentHeight < 100){
		currentHeight += 20;
		currentLevel -= 1;
	    }
        }
	var a = document.getElementById("parachute");
	a.setAttribute("style", "margin-top:"+currentHeight.toString()+"px; width:100px");
    }

    $(document).keyup(function(e) {
	switch(e.which) {

        case 38: // up
	    myFunction(0);
	    break;

        case 40: // down
	    myFunction(1);
	    break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)

});
})
