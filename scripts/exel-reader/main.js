// --- EXAMPLE 4 ---
// in this other example we want to read a remote (= on a server) Excel file
// to do so we need to make sure the server accepts the remote requests (it's the case for the same domain)
var ep=new ExcelPlus();
// we call openRemote()
ep.openRemote("http://my.server.com/path/file.xlsx", function(passed) {
  if (!passed) alert("Error: impossible to load the remote file");
  else alert(ep.selectSheet(1).readAll()) // show the content of the first sheet
});

/*var oFileIn;

$(function() {
  oFileIn = document.getElementById('my_file_input');
  if(oFileIn.addEventListener) {
    oFileIn.addEventListener('change', filePicked, false);
  }
});


function filePicked(oEvent) {
  // Get The File From The Input
  var oFile = oEvent.target.files[0];
  var sFilename = oFile.name;
  // Create A File Reader HTML5
  var reader = new FileReader();

  // Ready The Event For When A File Gets Selected
  reader.onload = function(e) {
    var data = e.target.result;
    var cfb = XLS.CFB.read(data, {type: 'binary'});
    var wb = XLS.parse_xlscfb(cfb);
    // Loop Over Each Sheet
    wb.SheetNames.forEach(function(sheetName) {
      // Obtain The Current Row As CSV
      var sCSV = XLS.utils.make_csv(wb.Sheets[sheetName]);
      var data = XLS.utils.sheet_to_json(wb.Sheets[sheetName], {header:1});
      $.each(data, function( indexR, valueR ) {
        var sRow = "<tr>";
        $.each(data[indexR], function( indexC, valueC ) {
          sRow = sRow + "<td>" + valueC + "</td>";
        });
        sRow = sRow + "</tr>";
        $("#my_file_output").append(sRow);
      });
    });
  };

  // Tell JS To Start Reading The File.. You could delay this if desired
  reader.readAsBinaryString(oFile);
}*/

