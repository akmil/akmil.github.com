'use strict';
var scripts = document.scripts;

function afterLoad() {
    console.log( "Загрузка завершена: " + typeof(this) );
}
for (var i = 0; i < scripts.length; i++) {
    scripts[i].onload = scripts.onerror = function () {
        if (!this.executed) { // выполнится только один раз
            this.executed = true;
            afterLoad();
        }
    };

    scripts[i].onreadystatechange = function () {
        var self = this;
        if (this.readyState == "complete" || this.readyState == "loaded") {
            setTimeout(function () {
                self.onload()
            }, 0); // сохранить "this" для onload
        }
    };
}
/**/
for(var i = 0; i< 500000; i++){
    setTimeout (function(){
        i++;
        //console.log('i',100%i);
    },10);
    //console.log('i', i%50000);
}

document.onreadystatechange = function () {
    var scriptList = [];

    if (document.readyState == "interactive") {
        scriptList = document.scripts;
        initApplication();
        scriptProgress( scriptList );
    }
    if (document.readyState == "loading") {
        console.log('loading');
       // setTimeout (loadingBar(),200);
    }
    if (document.readyState == "complete") {
        console.log('if _complete');
        hideCloack();
    }
    console.log('document.readyState:', document.readyState);
};



var body = document.getElementsByTagName('body')[0];
function initApplication() {
    var scriptList = document.scripts ;
    console.log( '\n **** \n **** \n scriptList to load:', scriptList.length, scriptList );


    var cloack = document.getElementById('cloack');
    cloack.style.display = 'block';

    console.log('initApplication - display:', document.getElementById('cloack').style.display);
}
function scriptProgress(scriptArr){
    console.log("scriptArr.length: ", scriptArr.length);
    var para ;
    var t = document.createTextNode("This is a paragraph.");

    if(scriptArr.length > 0) {
        for (var i = 0; i < scriptArr.length; i++) {
            para = document.createElement('p');
            t = document.createTextNode("This is a paragraph." + scriptArr[i].outerHTML);
            para.appendChild(t);
            document.getElementById('cloack').appendChild(para);
            console.log("[i]: p" , scriptArr[i] , para);
        }
    }
}

function loadIncr(script){
    script.onload = script.onerror = function() {
        if (!this.executed) { // выполнится только один раз
            this.executed = true;
            afterLoad(script);
        }
    };
}

function afterLoad(script) {
    console.log( "Загрузка завершена: " + script );
}

function hideCloack() {
    console.log('hideCloack');
    var el = document.getElementById('cloack');
    el.style.display = 'none';
    console.log('initApplication - display: ',document.getElementById('cloack').style.display);
}
/**/

var g_progress1 = null;
var g_$startButton = null;

var g_intervalID = null; // the handle of the interval set when the example is running
var g_curVal = 0;
var g_maxVal = 300;

// function increment() increments the value and passes the new value to the progress bar
// widget. If the progress bar is at 100%, it stops the increment.
//
function doUpdate () {

    if (g_progress1.getProgress() == 100) {
        clearInterval(g_intervalID);
        g_intervalID = null;

        // make sure that the progress bar shows that it is full
        g_progress1.$progDiv.css('width', '100%');

        g_curVal = 0;
        g_$startButton.html('Reset Example');
        return;
    }

    g_curVal = g_curVal + 1;
    g_progress1.setValue(g_curVal);
}

$(document).ready(function() {

    var running = false; // true if example is running

    // progress1 is a progress bar
    g_progress1 = new progressbar('pb1', g_maxVal, true);

    g_$startButton = $('#pb1_control');

    // bind a click handler to the start  button
    g_$startButton.click(function(e) {

        if (g_progress1.getProgress() == 100) {
            g_progress1.setValue(0);
        }

        if (running == true) {
            clearInterval(g_intervalID);
            g_intervalID = null;
            g_$startButton.html('Start Example');
            running = false;
        }
        else {
            // create an interval timer to increment the count every second
            g_intervalID = setInterval("doUpdate()", 40);

            g_$startButton.html('Stop Example');

            running = true;
        }
    });

}); // end document ready



////////////////////////////////////////////////////
//
// function progressbar() is a class to define an ARIA-enabled progressbar widget.
//
// @param(container_id string) container_id is the containing div for the progressbar
//
// @param(max integer) max is the maximum value for the values being set. Used to calculate percent progress
//
// @param(showVal boolean) showVal is true if the current progress value should be shown
//
// @return N/A
//
function progressbar(container_id, max, showVal) {

    // define progressbar object properties

    this.$container = $('#' + container_id);
    this.valMax = max;
    this.showVal = showVal;
    this.divWidth = 0;

    // Store the size of the progress bar
    this.width = this.$container.width();

    // Store the page position of the widget
    this.left = Math.round(this.$container.offset().left);
    this.top = Math.round(this.$container.offset().top);

    // Create and initialize the progress indicator
    this.$container.append('<div id="progDiv" class="progressIndicator"></div>');
    this.$progDiv = $('#progDiv');
    this.$progDiv.css('width', '0%');

    // Create and initialize the value box
    this.$container.append('<div id="progVal" class="progressVal" aria-hidden="false"></div>');
    this.$progVal = $('#progVal');
    this.$progVal.html('0%');

    if (this.showVal == false) {
        this.$progVal.addClass('hidden').attr('aria-hidden', 'true');
    }

} // end progressbar constructor

//
// function setValue() is a member function to set the value of the progress bar.
//
// @param(val integer) val is the new value to calculate the progress from
//
// @return N/A
//
progressbar.prototype.setValue = function(val)  {

    var percent = val * 100 / this.valMax;

    if (percent <= 100.0) {
        this.$container.attr('aria-valuenow', Math.round(percent));
        this.$progDiv.css('width', percent + '%'); //Math.round(percent) + '%');
        this.$progVal.html(this.$container.attr('aria-valuenow') + '%');
    }
}

//
// function getProgress() is a member function to return the percent progress
//
// @return (integer) Returns the percent progress in integer form (e.g. 50 represents 50%)
//
progressbar.prototype.getProgress = function()  {

    return this.$container.attr('aria-valuenow');
}

//
// function positionHandle() is a member function to position a handle at the specified value for the
// progressbar. If showVal is true, it also positions and updates the displayed value container.
//
// @param($handle object) $handle is a pointer to the handle jQuery object to manipulate
//
// @param (val integer) val is the new value of the progressbar
//
// @return N/A
//
progressbar.prototype.positionHandle = function($handle, val) {

    var handleHeight = $handle.outerHeight(); // the total height of the handle
    var handleWidth = $handle.outerWidth(); // the total width of the handle
    var handleOffset; // the distance from the value position for centering the handle
    var xPos; // calculated horizontal position of the handle;
    var yPos; // calculated vertical position of the handle;
    var valPos; //calculated new pixel position for the value;


    // calculate the horizontal pixel position of the specified value
    valPos = ((val - this.min) / (this.max - this.min)) * this.width + this.left;

    xPos = Math.round(valPos - (handleWidth / 2));
    yPos = Math.round(this.top + (this.height / 2) - (handleHeight / 2));

    // Set the position of the handle
    $handle.css('top', yPos + 'px');
    $handle.css('left', xPos + 'px');

    // Set the aria-valuenow position of the handle
    $handle.attr('aria-valuenow', val);

    // Update the stored handle values
    if (/1$/.test($handle.attr('id')) == true) {
        // first handle
        this.val1 = val;
    }
    else {
        // second handle
        this.val2 = val;
    }

    // if showVal is true, update the value container
    if (this.showVals == true) {
        this.updateValBox($handle, Math.round(valPos));
    }

} // end positionHandle()

//
// function updateValBox() is a member function to reposition a handle value box and update its contents
//
// @return N/A
//
progressbar.prototype.updateValBox = function() {

    var $valBox = $('#' + $handle.attr('id') + '_val');

    var xPos; // horizontal pixel position of the box
    var yPos; // vertical pixel position of the box

    // Set the position of the handle
    var boxWidth = $valBox.outerWidth();

    yPos = $handle.css('top');

    // Adjust the horizontal position to center the value box on the value position
    xPos = Math.round(valPos - (boxWidth / 2)) + 'px';

    // Set the position of the value box
    $valBox.css('top', yPos);
    $valBox.css('left', xPos);

    // Set the text in the box to the handle value
    $valBox.text($handle.attr('aria-valuenow'));

} // end updateValBox()
