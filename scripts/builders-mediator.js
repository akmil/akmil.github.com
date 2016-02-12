function BrickWorker(name) {
    this.name = name || '=some brick worker=';
}
BrickWorker.prototype =
{
    /*setName : function (name) {
        this.name = name;
        return this.name;
    },
    getName : function () {
        return name;
    },*/
    constructor: BrickWorker,

    getPart: function () {
        if (!prorab.tryToGetPart()) {
            console.log(this.name + ": no bricks left? Iam finnish.");
            prorab.roofBuildStart();
            return false;
        }

        console.log(this.name + " (BrickWorker): take and install a bricks!");
        prorab.oneBrickHasGone();
        return true;
    },
    argue_back: function () { console.log(this.name +  "(BrickWorker): hold on,wall is not ready "); }
};

function WindowWorker() { }
WindowWorker.prototype =
{
    isDoneFlag : false,

    isWindowDone: function () { return this.isDoneFlag; },

    constructor: WindowWorker,

    argue: function (startSetup) {
        startSetup *= 100;
        if( !this.isWindowDone() ) {

            if (startSetup <= 200) { /*hard-code number*/
                this.isDoneFlag = true;
                console.info("bricks left" + startSetup + ". Start to setup all windows!", '\n \t isWindowDone-> ' + this.isWindowDone());
            } else {
                console.log("WindowWorker: wait untill " + startSetup + "<200 for setup window." + this.isWindowDone());
                prorab.disputeStarted();
            }
        }
    }
};

function RoofWorker(name) {
    this.name = name || '=some roof worker=';
}
RoofWorker.prototype ={

    constructor: RoofWorker,

    getPartFromWindow: function () {
        if (!prorab.tryToGetPart()) {
            console.warn(this.name + ": no Roof parts left? Iam finnish.");
            return false;
        }

        console.warn(this.name + "^(RoofWorker): take and install roof");

        prorab.roofBuildStart();
        return true;
    },
    argue_back: function () { console.warn(this.name +  "^(RoofWorker): hold on, roof is not ready "); }
};

function BrickStorage(brick_count) {
    /*this._brick_count = brick_count;*/
}
BrickStorage.prototype =
{
    /*set setbrickCount(val) {
        this._brick_count = val;
    },

    get getbrickCount() {
        return this._brick_count;
    },*/

    setBrickCount : function (val) {
     this._brick_count = val;
        console.warn('\t \t'+this._brick_count + " --- this._brick_count");
     return this._brick_count;
    },
    getBrickCount : function () {
     return this._brick_count;
    },

    constructor: BrickStorage,

    takeOneBrickAway: function ()
    {
        if (this._brick_count == 0) return false;
        this._brick_count--;
        return true;
    }
};