
var prorab =
{
    brickMen: new app.module.service.BrickWorker('John'),
    windowMen: new app.module.service.WindowWorker(),
    roofMen: new app.module.service.RoofWorker('Vlad'),
    brickStorage: new app.module.service.BrickStorage('stones'),
    roofStorage: new app.module.service.BrickStorage('window'),

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





