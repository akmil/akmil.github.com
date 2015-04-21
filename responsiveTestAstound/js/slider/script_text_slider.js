/////
// direction = boolean value: true or false. If true, go to NEXT slide; otherwise go to PREV slide
function toggleSlide(direction) {
    var elements = document.getElementsByClassName("swipebox"); // gets all the "slides" in our slideshow
    //console.log(elements);
    // Find the LI that's currently displayed
    var visibleID = getVisible(elements);
    elements[visibleID].style.display = "none"; // hide the currently visible LI
    if (!direction) {
        var makeVisible = prev(visibleID, elements.length); // get the previous slide
    } else {
        var makeVisible = next(visibleID, elements.length); // get the next slide
    }
    elements[makeVisible].style.display = "inline-block"; // show the previous or next slide
}
function getVisible(elements) {
    var visibleID = -1;
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].style.display == "inline-block") {
            visibleID = i;
        }
    }
    return visibleID;
}
function prev(num, arrayLength) {
    if (num == 0) return arrayLength - 1;
    else return num - 1;
}
function next(num, arrayLength) {
    if (num == arrayLength - 1) return 0;
    else return num + 1;
}

/**/
window.onresize = resize;

function resize() {
    var elements = document.getElementsByClassName("swipebox");
    var len = elements.length;

    //check Slider
    if (screen.width >= 320) {
        var visibleID = -1;
        for (var i = 0; i < len; i++) {
            if (elements[i].style.display == "none") {
                elements[i].style.display = "inline-block"
                //console.log('elements[i]>', elements[i]);
            }
        }
    }

    //check "READ MORE"
    if ((screen.width >= 820) || (screen.width <= 380)) {
        document.getElementById("toggle-description").style.display = "block";
    }else {
        document.getElementById("toggle-description").style.display = "none";
        document.getElementById("hideBtn").innerHTML = 'read more' + '<span class="arrow-icon"></span>';
    }
}
/*toggle READ MORE*/
function toggleCurrent(elementIdName, elementToHide, _show) {
    var show = _show,
        msgHideInfo = 'Hide info',
        msgMore = 'Read more',
        buttonById = document.getElementById(elementIdName),
        elementHiding = document.getElementById(elementToHide);

    if (show) {
        elementHiding.style.display = "block";
        buttonById.innerHTML = msgHideInfo + '<span class="arrow-icon icon-flip"></span>' ;
        show = !show;
    }

    buttonById.onclick = function () {
        if (show) {
            elementHiding.style.display = "block";
            buttonById.innerHTML = msgHideInfo + '<span class="arrow-icon icon-flip"></span>';
            show = !show;
        } else {
            elementHiding.style.display = "none";
            buttonById.innerHTML = msgMore + '<span class="arrow-icon"></span>';
            show = !show;
        }
    }
}



