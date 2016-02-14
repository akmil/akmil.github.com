function BrickWorker(name) {
    this.name = name || '=some brick worker=';
}
BrickWorker.prototype =
{
    constructor: BrickWorker,

    isDoneFlag : false,

    getPart: function () {
        if (this.isDoneFlag) return; //check by flag to prevent alert after last loop

        if (!prorab.tryToGetPart()) {
            console.log(this.name + ": no bricks left? Iam finnish.");
            this.isDoneFlag = 1;
            return;
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
    constructor: WindowWorker,

    isDoneFlag : false,

    isWindowDone: function () { return this.isDoneFlag; },

    argue: function (startSetup) {
        startSetup *= 100;
        if( !this.isWindowDone() ) {

            if (startSetup <= 200) { /*hard-code number*/
                this.isDoneFlag = true;
                console.info("bricks left" + startSetup + ". Start to setup all windows!", '\n \t isWindowDone-> ' + this.isWindowDone());
            } else {
                console.log("WindowWorker: wait untill X-bricks <=200 for setup window." + this.isWindowDone());
                prorab.disputeStarted();  //recive answer from BrickWorker
            }
        }
    }
};


function RoofWorker(name) {
    this.name = name || '=some roof worker=';
}
RoofWorker.prototype ={
    constructor: RoofWorker,
    count: 0,
    isDoneFlag : false,

    getPartFromRoof: function () {


        if (this.isDoneFlag) return; //check by flag to prevent alert after last loop

        if (!prorab.tryToGetPartWindow()) {
            console.warn(this.name + ": no Roof parts left? Iam finnish.");
            this.isDoneFlag = true;
            return false;
        }

        //if  brickMen have no bricks RoofWorker can start build
        //if( !prorab.brickMen.getPart() ) {}

        console.warn(this.name + "^(RoofWorker): take and install \n roof #" + this.count++);
        prorab.roofBuildStart();

        return true;
    },
    argue_back: function () { console.warn(this.name +  "^(RoofWorker): hold on, roof is not ready "); }
};


function BrickStorage(name) {
    this.name = name;
}
BrickStorage.prototype =
{
    setBrickCount : function (val) {
     this._brick_count = val ;
        console.warn('\t \t'+this._brick_count + " --- this._brick_count" , this.name);
     return this._brick_count;
    },
    getBrickCount : function () {
     return this._brick_count;
    },

    constructor: BrickStorage,

    takeOnePartkAway: function ()
    {
        if (this.getBrickCount() == 0) return false;
        this._brick_count--;
        return true;
    }
};