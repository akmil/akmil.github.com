function Human() {
    this.hands = 4;
    this.legs = 4;
}

Human.prototype.isWalk = function () {
    return "can walk"
};

/*2nd*/
function Woman() {
    this.beard = 'have no beard';
}

extend(Woman, Human);

Woman.prototype.speak = function () {
    return "Woman speak by falcet"
};

function OldWoman(){
    this.age = 100500;
}
extend(OldWoman, Woman);

function extend( C, P ) {
    var F = function () {};
    F.prototype = P.prototype;
    C.prototype = new F();
    C.prototype.constructor = C;
}

var olga = new Woman();
var gala = new OldWoman();
console.log(olga);
console.log(gala);