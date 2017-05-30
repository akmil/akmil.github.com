import {ntc} from './nameThatColor.js';

var srtnm = ntc.names, clrop, clr, rgb, alt,
  $colorinp = $("#colorinp"),
  $colorop = $("#colorop"),
  $colorpick = $("#colorpick"),
  n_match  = ntc.name("#B0BF1A"),
  n_rgb        = n_match[0], // This is the RGB value of the closest matching color
  n_name       = n_match[1], // This is the text string for the name of the match
  n_exactmatch = n_match[2]; // True if exact color match, False if close-match

export var ntc_main = {

  fb: null,

  init: function () {
    this.$colorop = $("#colorop");
    srtnm = ntc.names;
    // srtnm.sort(ntc_main.nameSort);
    clrop = [];
    for (let i = 0; i < srtnm.length; i++) {
      clr = srtnm[i][0];
      rgb = ntc.rgb("#" + clr);
      alt = ((rgb[0] + rgb[1] + rgb[2]) / 3 < 128);
      clrop.push("<option value='" + clr + "' " + (alt ? "class='w'" : "") + "style='background:#" + clr + "'>" + srtnm[i][1] + "</option>");
    }
    $colorpick.html("<select id=\"colorop\"><option value=\"\">Select a Color:</option>" + clrop.join() + "</select>");
    ntc_main.fb = $.farbtastic('#picker', ntc_main.setColor);

    $colorinp
      .on('keyup keydown',ntc_main.inpColor)
      .change(ntc_main.inpColor);
    $("#colorop").change(ntc_main.inpColorList);
    ntc_main.setWheel((window.location.hash.length == 7 ? window.location.hash : "#6195ED"));
  },

  inpColor: function () {
    let clr = $colorinp.get(0).value;

    if (clr.substring(0, 1) == "#" && clr.length == 7)
      return ntc_main.setWheel(clr);
    if (clr.substring(0, 1) != "#" && clr.length == 6)
      return ntc_main.setWheel("#" + clr);
  },

  inpColorList: function (e) {
    if (e.target.value != ""){
      return ntc_main.setWheel("#" + e.target.value);
    }
  },

  nameSort: (a, b)=> (a[1] > b[1] ? 1 : (a[1] < b[1] ? -1 : 0)),

  setColor: function (clr) {
    let rgb = ntc.rgb(clr);
    $("#colorbox").css({backgroundColor: clr});
    $colorinp.get(0).value = clr.toUpperCase();
    $("#colorrgb").html("rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2]+")");
    n_match = ntc.name(clr);
    $("#colorname").html(n_match[1] + (n_match[2] ? "<sup id='solid'>solid</sup>" : "<sup>approx.</sup>"));
    $("#colorsolid").css({backgroundColor: n_match[0]});
    window.location.hash = clr.toUpperCase();
  },

  setWheel: function (clr) {
    ntc_main.fb.setColor(clr);
  }

};

/*export function hexComparator(a,b){
  return a[0]<b[0]
}

export function rgbComparator(a,b){
  var totalA = 0,totalB = 0;
    totalA = a[2]+a[3]+a[4];
  totalB = b[2]+b[3]+b[4];
  console.log(a[0] , a[8]);
  return totalA < totalB && (a[2] < b[2] || a[3] < b[3] || a[4] < b[4])
}*/


