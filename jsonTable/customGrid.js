var person = {
    renderTo: "id01",
    url: "http://www.json-generator.com/api/json/get/cdJeVpvdIO?indent=2",
    page: 5,
    columnTitle: [{index: "iNdex"}, {id: "ID"}, {name: "Name"}, {company: "Kompany"}, {adress: "Adress"}],
    sortByCompanyVal: true,
	isSearch: true
};
var taggleBool = true; //need in showInfo Btn

//Creating a SimpleGrid Object.
var SimpleGridObj = function SimpleGridOb(obj) {
    this._settings = obj;//is Object 
    //var PAGE = obj.page;	//constant=3	
	this.PAGE = obj.page;
    this.init();
    this.renderTable();
}

SimpleGridObj.prototype = {
    constructor: SimpleGridObj,
    _tbody: undefined,
    _PAGE: undefined,
    _columnTitle: undefined,
    _myCounter: 0,
    _currentPage: 0,
    _startTable: 0,
    _sortByCompany: undefined,
    url: "",
    setNextPage: function() {
        //console.log('pageConst: ', this.PAGE);		
        var _nextPage = _currentPage + this.PAGE;
        this._startTable = _currentPage;
        this._settings.page = _nextPage;
    },
    setPrevPage: function() {
        var _nextPage = _currentPage - this.PAGE;
        this._startTable = _currentPage - this.PAGE * 2;
        this._settings.page = _nextPage;
    },
    getCurrentPage: function() {
        return this._settings.page;
    },
    init: function() {
        _startTable = this._startTable;// 0
        
        _columnTitle = this._settings.columnTitle;         		
        _currentPage = this.getCurrentPage();
        //_myCounter = this._myCounter;

        url = this._settings.url;
        renderTo = this._settings.renderTo;
        PAGE = this.PAGE;
        _sortByCompanyVal = this._settings.sortByCompanyVal;
		_isSearch = this._settings.isSearch;
    },
    renderTable: function() {
        var xmlhttp = new XMLHttpRequest();
        //var url = "http://www.w3schools.com/website/Customers_MYSQL.php";

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                myFunction(xmlhttp.responseText);
            }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        //var tableColumns = [];
        function myFunction(response) {
			var i = 0;
            var arr = JSON.parse(response, function(key, value) {
                if (key === undefined) {
                    console.log('keys is not found in JSON', response.key);
                    return;
                }
                //tableColumns.push(key); //not used 
                return value;
            });

            //sortByCompany			
            if (_sortByCompanyVal)
                arr.sort(SimpleGridObj.prototype.sortByCompany);
            //console.log(SimpleGridObj.prototype.sortByCompany.toString());
			
			
			           
            var out  = "<table id ='SimpleGridObj' class='table table-striped'> <thead><tr>";
			var outSearch = "<table id ='SearchTable' class='table table-striped'> <thead><tr>";
            //build table title			
			function build (outString){
            for (i = 0; i < _columnTitle.length; i++) {
                if(_sortByCompanyVal && Object.keys(_columnTitle[i]) == 'company'){
					outString +="<th style = 'color: #ff0000'>"+ _columnTitle[i].company + '(sotred)'+"</th>"
				}else
                outString += "<th>" + Object.keys(_columnTitle[i]) + "</th>";
            }
			return outString;
			}
			out += build (out);
//for (prop in Object.keys(_columnTitle) ) {
//   console.log(Object.keys(_columnTitle[3]) + " : " + _columnTitle[prop].company);
//}
            out += "</tr></thead>"

            if (_currentPage > arr.length) {
                console.log('check for end table', _currentPage );
                /*here disable Next-Btn*/
                _currentPage = arr.length;
                _startTable = arr.length - this.PAGE;
            }
            
            if (_currentPage < this.PAGE) {
            console.log('check for start table', _currentPage );
                /*here disable Previous-Btn*/
                _currentPage = this.PAGE;
                _startTable = 0;
            }

            console.log('startTable --: ', _startTable, '_currentPage', _currentPage);
			
            //build table body			
			out += "<tbody>";
            for (i = this._startTable; i < _currentPage; i++) {
                out += "<tr><td>" +
                        arr[i].index +
                        "</td><td>" +
                        arr[i]._id +
                        "</td><td>" +
                        arr[i].name +
                        "</td><td>" +
                        arr[i].company +
                        "</td><td>" +
                        arr[i].address +
                        "</td></tr>";
            }
            out += "</tbody></table>";
            document.getElementById(renderTo).innerHTML = out;
            this._startTable = _currentPage;
			
			
			
			//searchByCompany
			if(_isSearch){
				outSearch += build (outSearch);			
				outSearch += "</tr></thead><tbody>";
				var tmp = SimpleGridObj.prototype.searchByCompany(); //retutn value from input
				var matches = tmp.match(/\b(\w)/g);
				
				for (i = 0; i < arr.length; i++) { 
				//console.log(  matches[0]  );
				//console.log( arr[i].company.charAt(0) === matches[0]); //compere first letter in 'arr' and inputValue
					if (matches === null) { 
						console.log('matches  null');
						try{}catch(err) {console.log('catch : ',err);	}
						SimpleGridObj.prototype.clearTable("form-search","SearchTable");
						
						//var parentSearch = document.getElementById("form-search");
						//var childSearch = document.getElementById("SearchTable");
						//parentSearch.removeChild(childSearch);
					}
					if(matches !== null && arr[i].company.charAt(0) === matches[0].toUpperCase() ){
					//console.log('arr[i].company === tmp' , arr[i].company === tmp);
					 console.log('you found ' , tmp);
					 
					 outSearch += "<tr><td>" +
                        arr[i].index +
                        "</td><td>" +
                        arr[i]._id +
                        "</td><td>" +
                        arr[i].name +
                        "</td><td>" +
                        arr[i].company +
                        "</td><td>" +
                        arr[i].address +
                        "</td></tr>";					 
					 }else{
					 //console.log('no maches found for');
					 //
					 }
					
				}				
				outSearch += "</tbody></table>";
				//var searchElemTable = document.getElementById('search');
				//console.log('searchElemTable ', searchElemTable);
				//searchElemTable.appendChild(document.createElement('div'));
				
				document.getElementById('form-search').innerHTML = outSearch;
			}
			
        }/*-------end JSON parse*/
    },
    clearTable: function(idOfParent, idOfChield) {
        var parent = document.getElementById(idOfParent);
        var child = document.getElementById(idOfChield);
        parent.removeChild(child);
    },
    sortByID: function(x, y) {
        return x._id - y._id;
    },
    sortByCompany: function(x, y) {
        return ((x.company == y.company) ? 0 : ((x.company > y.company) ? 1 : -1));
    },
	
	searchByCompany: function() {	
		return document.getElementById("search").value;
    }
}

var grid = new SimpleGridObj(person);

/*---buttons---*/
function sortByCompanyBtn(booleanVal) {
    grid.clearTable();
    booleanVal = grid._settings.sortByCompanyVal;
    grid.init();
    grid.renderTable();
    console.log('sortByCompanyBtn: ', booleanVal);
    grid._settings.sortByCompanyVal = !booleanVal;
}

function reloadTable() {
    grid.clearTable("id01","SimpleGridObj");
    grid.init();
    grid.renderTable();
}

function next() {
    grid.clearTable("id01","SimpleGridObj");
    //console.log('_currentPageNew1: ', _currentPage);
    grid.setNextPage();
    grid.init();
    grid.renderTable();
    //console.log('after init _currentPageNew2: ', _currentPage);
}

function previous() {
    //grid.clearTable();
    //_currentPage = _currentPage - PAGE
    grid.setPrevPage();
    grid.init();
    grid.renderTable();    
}

function findByCompany() {
	console.log('startt findByCompany');
    grid.init();    
	grid.renderTable();	
	grid.searchByCompany(); 
	
}

function showInfo(id,taggleBool) {
    var txt = "";
    var x, t;
	if(taggleBool){
	
    for (x in person) {
	
        if (x === 'columnTitle') {
            txt += x + " : <b>";
            for (t in person.columnTitle) {
                txt += Object.keys(person.columnTitle[t]) + ", ";
            }			
            txt += "</b><br>";
        } else {
            txt += x + " :  <b> " + person[x] + " </b><br>";
        }
		txt += "</b>";
    }
	
    document.getElementById(id).innerHTML = txt;
	}else { document.getElementById(id).innerHTML = "info here"; }
	
	this.taggleBool = !taggleBool;
	
	//console.log(arr);
};