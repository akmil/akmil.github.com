import {ntc} from './nameThatColor.js';
/*---------------*/
/*
 color: #1111;
 */
var patt1 = /#[a-zA-Z0-9]{6}|rgb\((?:\s*\d+\s*,){2}\s*[\d]+\)|rgba\((\s*\d+\s*,\s*){3}[\d\.]+\)|hsl\(\s*\d+\s*(\s*\,\s*\d+\%){2}\)|hsla\(\s*\d+(\s*,\s*\d+\s*\%){2}\s*\,\s*[\d\.]+\)/gm;
var testCss = '"#0D2E1C", "#2F4F4F", "#4F9D5D", "#FFFF31", "#7FFFD4", "#FFEFC1"';
var outColor = getTextColor(testCss, patt1);

function getTextColor(string, patt1) {
  return string.match(patt1)
}
function remove_duplicates_es6(arr) {
  let s = new Set(arr);
  let it = s.values(); // returns elements in insertion order
  return Array.from(it);
}

export function addText() {
  var tarea = $('textarea'),
    // tval = "  $b1: rgba(0, 0, 0, 0.6);\n    $b2: rgba(0, 0, 0, 1);\n $p1a: #158cd2;\n  $p1-90: rgb(0, 155, 222);";
    tval = " $b0: rgba(0, 0, 0, 0);\n $b1: rgba(0, 0, 0, 1);\n $b2: rgba(0, 0, 0, 0.6);\n $b3: rgba(0, 0, 0, 60);\n $white-70: rgba(255, 255, 255, 0.7);\n $s1:  rgba(200, 224, 213, 0.32);\n $p1a: #158cd2;\n $p1b: #2a7cc7;\n $s1b: #a61f84;\n $s1a: #ba1079;\n $p1-90: rgb(0, 155, 222);\n $steel-20: rgba(118, 134, 146, 52);\n $silver: #dadddf;\n $cerulean: #009cde;\n$deep-lavender-90: rgba(115, 86, 165, 90);\n$n3: #b7c9d3;";
  tarea.val(tval);
}

export function createCustomList() {
  var tarea = $('textarea').val(),
    colorsArr = [];

  outColor = getTextColor(tarea, patt1);
  colorsArr = remove_duplicates_es6(outColor);

  // console.log('colorsArr',colorsArr);

  addCustomList(colorsArr, 'named-colors-container');
}

function addCustomList(outColor, className) {
  let $listWrapper = $('.js__list-wrapper'),
    $finalListWrapper = $('.js__list-resulting-scss');
  $listWrapper.empty();
  $finalListWrapper.empty();

  let $ul = $('<ol class="' + className + ' custom_select__list">').appendTo($listWrapper),//create ul
    colorsSet=[],
    setRGBA = (item)=>{
    let val, //arr or string
      isHEX = item.includes('#'),
      isRGBA = item.includes('rgba' || 'RGBA' ),
      isRGB = item.includes('rgb' || 'RGB' );

    if(isHEX){
      //corol is HEX, convert to rgb
      val = ntc.rgb(item);
      val[3] = (ntc.name(item)[3] === false)?-1:ntc.name(item)[3]
    }
    if(isRGBA || isRGB){
      val = ntc.rgba(item);
    }
    if(isRGB){
      val[3] = (ntc.name(item)[3] === false)?-1:ntc.name(item)[3]
    }
    return val;
  },
    setRGB = (item)=>{
    let val, //arr or string
      isHEX = item.includes('#'),
      isRGBA = item.includes('rgba' || 'RGBA' ),
      isRGB = item.includes('rgb' || 'RGB' );

    if(isHEX){
      //corol is HEX, convert to rgb
      val = ntc.rgb(item);
    }
    if(isRGBA || isRGB){
      val = ntc.rgba(item);
      if(val.length === 4){ val.length = 3 }
    }
    return val;
  };

  //put li inside ul
  outColor
    .map(function (item) {
      var rgb = ntc.rgb(item),
        n_match = ntc.name(item),
        // opacity = null,
        name = n_match[1],
        isRGB = item.includes('rgb' || 'rgba' || 'RGB' || 'RGBA' &&'('&&')'),
        strRGB = ' RGB:',
        _hex,_rgb,_rgba,_hls;
      var colorsOnly ,red , green, blue;
      
      if(isRGB){
        strRGB = ' ';
        colorsOnly = item.substring(item.indexOf('(') + 1, item.lastIndexOf(')')).split(/,\s*/);
        red = colorsOnly[0];
        green = colorsOnly[1];
        blue = colorsOnly[2];


        ( item.includes('rgba' || 'RGBA' ) )
          ? rgb = item
          : rgb = ntc.rgb2hex(red,green,blue);


      }
      _hex = (item.includes('#')) ? item : ntc.rgb2hex(red,green,blue);
      _rgb = setRGB(item);
      _rgba = setRGBA(item);

      //create output colors obj
      colorsSet.push({
        name,
        opacity:(n_match[3] === -1)?false:n_match[3],
        hex: _hex,
        rgb: _rgb,
        rgba:_rgba,
        hls: 'not supported'
      });

      // opacity = null;
      $ul.append(
        `<li class='custom_select__item' >
            <p><span class='color-number' style='background-color: ${item}'></span><span> ${item} </span><span>${strRGB + rgb}</span>
            <span><b> Name: ${name}</b></span>
            </p>
        </li>`
      )
    });

  $ul.after(
    `<button class="btn btn-sm btn-outline-info mb-3 js_to-scss">to scss</button>`
  );


  var scssBtnHandler = ()=>{
    // console.log(colorsSet);
    var $wrapper = $('.js__list-resulting-scss'),
     $ulSCSS = $('<ul class="list-group prepared">').appendTo($wrapper);//create ul

    if($('.list-group.prepared').length > 1){ $('.list-group.prepared').get(0).remove(); }

    colorsSet
      .map(function (item) {
        let showVal = (item.opacity === false )? item.hex : `rgba(${item.rgba})`;
        $ulSCSS.append(
          `<li class='custom_select__item list-unstyled'>            
              $${Case.toSnakeCase(item.name.toLowerCase())}: ${showVal};            
        </li>`
        )
      });
  };
  $('.js_to-scss').on('click',scssBtnHandler);
}

var Case = {
  titleToCamelCase : function (string) {
      if( typeof dashed != "string" || dashed.length==0 )
        return "";
      return dashed.toLowerCase().replace(/\s([a-z]?)/g, function(match, letter) {
        return letter.toUpperCase();
      });
  },
  /*toPascalCase : function (string) {
    if( typeof dashed != "string" || dashed.length==0 )
      return "";
    return dashed.toLowerCase().replace(/\s([a-z]?)/g, function(match, letter,pos) {
      return (pos > 0 ? "-" : "") + letter.toLowerCase();
    });
  },*/
  toSnakeCase : function (string) {
    string = string.toLowerCase();
    return string.replace(/(\s\w)/g, function(m){return "-"+m[1].toLowerCase();});
  },
  snakeCaseToCamelCase : function( dashed ) {
    if( typeof dashed != "string" || dashed.length==0 )
      return "";
    return dashed.toLowerCase().replace(/\-([a-z]?)/g, function(match, letter) {
      return letter.toUpperCase();
    });
  }
};
