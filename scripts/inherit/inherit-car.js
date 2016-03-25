
function inherit(child,parent){
    var Layer = function(){};
    Layer.prototype = parent.prototype;
    child.prototype = new Layer();
    child.super = parent.prototype;
    //return child;
}

function inheritFromParent(parent){
    var Layer = function(){};
    Layer.prototype = parent;
    console.log('inheritParent : ',parent);
    return new Layer();
}
//
//
function addText(txt){
    var p = document.createElement('p');
    document.body.appendChild(p).innerHTML += txt;
}
//
function Auto(){
    var engineType = 'wood'; //static privat

    this.name = 'auto with ' + engineType + ' engine.';
    //this.name = `auto with ${engineType} engine`;
    this.doorsN = 0;
    this.toString = function(){return this.name};
}
//piblic
Auto.prototype.info = function(){
    return this.toString() + ' !!' ;
}
Auto.prototype.setBody = function(body){this.body = body;}
Auto.prototype.getBody = function(){ return this.body; }

function Roadster(){
    this.body = 'set body of roadster';
    this.name = 'auto-roadster';
    this.doorsN = 'set doors number';

    this.setDoorsN = function(n){this.doorsN = n;};
    this.getDoorsN = function(){return this.doorsN;};
}


function Furgon(){
    this.body = 'Furgon';
    this.name = 'mini-van';
    this.doorsN = 'set doors number';
    this.setDoorsN = function(n){this.doorsN = n;};
    this.getDoorsN = function(){return this.doorsN;};

    this.toString = function(){return `name: ${this.name}, body: ${this.body}, doors: ${this.getDoorsN()}`};
    /*
     return {
     toString: this.toString,
     setDoorsN: this.setDoorsN,
     getDoorsN: this.getDoorsN
     };
     */
}



function FurgonCivil(){
    var MAX_UPLOAD = 12;

    this.name = 'FurgonCivil';
    this.curPassagires = 0;
    this.takePassagires = function(n){
        if( (this.curPassagires += n)<MAX_UPLOAD ) {
            console.log(`can take ${MAX_UPLOAD - this.curPassagires} more`);
            return true
        };
        console.log(`can take only: ${MAX_UPLOAD - this.curPassagires + n}`);
        return false;
    }
}
inherit(FurgonCivil, Furgon);
var furgonCivil = new FurgonCivil();
//furgonCivil.__proto__.__proto__.getDoorsN();


function FurgonTruck(){
    this.name = 'FurgonTruck';
}


function FurgonEvacuator(){
    this.height=0;
    this.name='default';
    this.setKrainHeight = function(n){this.height = n;}
    this.getKrainHeight = function(){ return this.height;}

    //@Override
    this.toString = function(){return `${this.name}, ${this.body}, Krain is ${this.getKrainHeight()}m height.`};
}



var auto = new Auto();
auto.setBody('auto abstract');

var furgon = inheritFromParent(auto);
furgon.setBody('furgon');
console.log('furgon constructor',  furgon.constructor.name);

var furgonTruck = inheritFromParent(furgon);
furgonTruck.setBody('furgonTruck');
console.log('furgonTruck', furgonTruck);

var evacuator = new FurgonEvacuator;
inherit(FurgonEvacuator, Furgon);



var roadster = new Roadster();
inherit(Roadster, Auto);
roadster.setDoorsN(2);
roadster.body='shelby cobra';

//refregerator
//var refregerator = inheritFromParent(furgon);
var refregerator = new Furgon();
inherit(refregerator, furgon);

addText(`<b>Furgon:</b> ${furgon.body}, ${furgon.doorsN} , ${furgon.name}. <br/> Constructor: ${furgon.constructor.name} `);