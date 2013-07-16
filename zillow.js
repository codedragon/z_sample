// function for IE to hover for our dropdown menu
ieHover = function() {
    // Only want navigation lists to dropdown.
    var dDown = document.getElementById("nav").getElementsByTagName("LI");
    for (var i=0; i<dDown.length; i++) {
	dDown[i].onmouseover=function() {
	    this.className+=" iehover";
	}
	dDown[i].onmouseout=function() {
	    // get rid of class when done
	    this.className=this.className.replace(new RegExp(" iehover\\b"), "");
	}
    }
} 
//only necessary for IE
if (window.attachEvent) window.attachEvent("onload", ieHover);

// function for IE to click for our dropdown menu
ieActive = function() {
    // Only want navigation lists to dropdown.
    var dDown = document.getElementById("nav").getElementsByTagName("LI");
    for (var i=0; i<dDown.length; i++) {
	dDown[i].onmousedown=function() {
	    this.className+=" ieactive";
	}
	dDown[i].onmouseup=function() {
	    // get rid of class when done
	    this.className=this.className.replace(new RegExp(" ieactive\\b"), "");
	}
    }
} 
//only necessary for IE
if (window.attachEvent) window.attachEvent("onload", ieActive);

