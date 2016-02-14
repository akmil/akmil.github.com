Sandbox.modules.prorab = function (prorab) {}

var prorab =
{
    brickMen: new BrickWorker('John'),
    windowMen: new WindowWorker(),
    roofMen: new RoofWorker('Vlad'),
    brickStorage: new BrickStorage('stones'),
    roofStorage: new BrickStorage('window'),

    tryToGetPart: function () {
        if (this.brickStorage.takeOnePartkAway()) { return true; }
        return false;
    },
    tryToGetPartWindow: function () {
        if ( this.roofStorage.takeOnePartkAway() ) { return true; }
        return false;
    },
    oneBrickHasGone: function (){

        //check if bricks less then 200
        this.windowMen.argue( this.brickStorage.getBrickCount() );
        console.log('  ++ brickStorage brick count: ' + this.brickStorage.getBrickCount()*100 );

        //if brickMen have brick===false then start to build roof
        if ( !prorab.brickMen.getPart() ) {
            this.roofBuildStart();
            return false;
        }
    },

    disputeStarted: function (){ this.brickMen.argue_back(); },

    roofBuildStart: function () {
        if (!this.brickMen.getPart()) {
            console.log('   - roofStorage: roof parts left: ' + this.roofStorage.getBrickCount());
            this.roofMen.getPartFromRoof(this.roofStorage.getBrickCount() + 1);
        }
    }
};


console.log(prorab);
    /*testing mediator*/
    var round_counter = 0;
    prorab.brickStorage.setBrickCount(5); //brickStorage setter
    prorab.roofStorage.setBrickCount(3);

    prorab.roofMen.getPartFromRoof(); //roofMen wait until prorab let him do it


