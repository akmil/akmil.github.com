
function Human() {
    this.hands = 4;
    this.legs = 4;
}
Human.prototype.isWalk = function () {
    return "can walk"
};

/*2nd*/
function Man() {
    this.beard = true;
}
Man.prototype.speak = function () {
    return "speak by bass"
};

function Woman() {
    this.beard = 'have no beard';
}
Woman.prototype = inheritHelper(Human);
Woman.prototype.speak = function () {
    return "Woman speak by falcet"
};
var olga = new Woman();
console.log(olga);

/*3nd lvl*/
function OldMan() {
    this.beard = 'white beard';
}
OldMan.prototype.run = function () {
    return "can't run"
};

function OldWoman() {
    this.beard = 'have ugly beard';
}
Woman.prototype = inheritHelper(Woman);
OldWoman.prototype.coockie = function () {
    return ['choclet','candy'];
};

function inheritHelper22(parent, child) {
    var layer =  function(){};
    layer.prototpe = parent.prototype;
    child.prototype = new layer();
    child.prototype.constructor = child;
}

function inheritHelper(parent, child) {
    var layer =  function(){};
    layer.prototpe = parent.prototype;
    child.prototype = new layer();
    child.prototype.constructor = child;
}

var manya = new OldWoman();
console.log(manya);



















function inheritHelper3(parent){
    function Layer(){};    
    Layer.prototype = parent;    
    return new Layer();
}